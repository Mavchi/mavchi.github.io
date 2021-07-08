import './ContactForm.scss';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Button from '../../components/Buttons/Button';

function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm();

  /*
    useEffect(() => {
        if (formState.errors.name) {
            console.log('error', formState.errors.name);
        } else {
            console.log('no erros')
        }
    }, [formState])
    */

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='container'>
        <div className='input-container'>
          <input
            type='text'
            id='name'
            placeholder='Name'
            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: {
                value: 30,
                message: 'Please use 30 characters or less',
              },
            })}
          />
          <label for='name'>Name</label>
        </div>

        <div className='input-container'>
          <input
            type='email'
            id='email'
            placeholder='Email address'
            {...register('email', {
              required: { value: true, message: 'Please enter your email' },
              pattern: { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Please enter valid email address' },
            })}
          />
          <label for='email'>Email address</label>
        </div>
      </div>

      <div className='input-container'>
        <input
          type='text'
          id='subject'
          placeholder='Subject'
          {...register('subject', {
            required: { value: true, message: 'Please enter a subject' },
            maxLength: {
              value: 75,
              message: 'Subject cannot exceed 75 characters',
            },
          })}
        />
        <label for='subject'>Subject</label>
      </div>

      <div className='input-container'>
        <textarea 
          id='message' 
          rows={3} 
          placeholder='Message' 
          {...register('message', { 
              required: { value: true, message: 'Please enter a message' } 
        })} />
        <label for='message'>Message</label>
      </div>

      <Button type='submit' text='Submit' />
    </form>
  );
}

export default ContactForm;
/*
          {formState.errors.name && <span className='errorMessage'>{formState.errors.name.message}</span>}
          {formState.errors.email && <span className='errorMessage'>{formState.errors.email.message}</span>}

        {formState.errors.subject && <span className='errorMessage'>{formState.errors.subject.message}</span>}
{formState.errors.message && <span className='errorMessage'>{formState.errors.message.message}</span>}
*/
