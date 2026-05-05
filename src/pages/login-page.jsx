import React, { useState } from 'react'
import s from './login-page.module.scss'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { supabaseClient } from '../shared/clients/supabaseClient';
import { useAuthContext } from '../shared/context/AuthContext';

export const LoginPage = () => {
	const {login} = useAuthContext()

	const validateScheme = Yup.object().shape({
    email: Yup.string()
			.email("это не имейл, перепиши пж, на имейл")
			.required('Поля должны быть заполнены'),
    password: Yup.string()
      .min(8, "Минимум 8 символов")
      .max(20, "Максимум 20 символов")
			.required('Поля должны быть заполнены'),
  });

	return (
    <div className={s.wrapper}>
			<Formik 
				validationSchema={validateScheme}
			 initialValues={{
				email: '',
				password: null
			}} onSubmit={({email, password}) => {
				login({email, password})
			}}>
				{({errors, isValid, touched}) => (
					<Form className={s.form}>
						<Field
							type="text"
							className={s.input}
							placeholder="E-mail"
							name="email"
						/>
						{(errors?.email?.length > 0) ? errors?.email : ''}
						<Field
							type="password"
							className={s.input}
							placeholder="qwerty123"
							name="password"
						/>
						{(errors?.password?.length > 0) ? errors?.password : ''}
						<button className={s.submit} type='submit' disabled={!isValid || (!touched?.email || !touched?.password)}>ВОЙТИ</button>
					</Form>
				)}
			</Formik>
    </div>
  );
}