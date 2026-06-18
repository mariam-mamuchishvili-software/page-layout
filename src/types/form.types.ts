export type FormInputType = 'text' | 'email' | 'tel' | 'url' | 'password' | 'number';

export interface FormMessages {
  required: string;
  invalid: string;
  success: string;
}

interface BaseFormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autocomplete?: string;
  required?: boolean;
  minlength?: number;
  messages: FormMessages;
}

export interface InputField extends BaseFormField {
  type: FormInputType;
}

export interface TextareaField extends BaseFormField {
  type: 'textarea';
  rows?: number;
}

export type FormField = InputField | TextareaField;

export type ContactFormFieldName = 'name' | 'email' | 'subject' | 'message';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormConfig {
  fields: FormField[];
  submitLabel: string;
  submitIcon?: string;
}
