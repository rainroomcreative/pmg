import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import firebase from 'firebase';

const Contact = ({ title, content, id, t }: ContactProps) => {

    // Remoteconfig Variables
    const remoteConfig = firebase.remoteConfig();
  
  
    const REACT_APP_UserId = remoteConfig.getValue('REACT_APP_UserId').asString();
    const REACT_APP_TemplateId = remoteConfig.getValue('REACT_APP_TemplateId').asString();
    const REACT_APP_ServiceId = remoteConfig.getValue('REACT_APP_ServiceId').asString();
  
  
    init(REACT_APP_UserId);
  
  
      const sendEmail = (e:any)  => {
  
      e.preventDefault();
  
      emailjs.sendForm(
         REACT_APP_ServiceId ? REACT_APP_ServiceId : `${process.env.REACT_APP_ServiceId}`,
         REACT_APP_TemplateId ? REACT_APP_TemplateId : `${process.env.REACT_APP_ServiceId}`, 
         e.target, 
         REACT_APP_UserId ? REACT_APP_UserId : `${process.env.REACT_APP_UserId}`)
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
    }

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={sendEmail}>
              <Col span={24}>
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                  labelName="Name"
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  labelName="Email"
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  labelName="Message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
