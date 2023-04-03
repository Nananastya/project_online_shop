import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from './Input';
import { ErrorOutput } from './ErrorOutput';

export const MessageForm = (props) => {
    return(
        <Form>
            <p>firstName:</p>
            <Field name="firstName" component={Input} />
            <ErrorMessage name="firstName" component={ErrorOutput} />
            <p>lastName:</p>
            <Field name="lastName" component={Input} />
            <ErrorMessage name="lastName" component={ErrorOutput} />
            <p>age:</p>
            <Field name="age" component={Input} />
            <ErrorMessage name="age" component={ErrorOutput} />
            <p>address:</p>
            <Field name="address" component={Input} />
            <ErrorMessage name="address" component={ErrorOutput}/>
            <p>phone:</p>
            <span>+380</span><Field name="phone" component={Input} />
            <ErrorMessage name="phone" component={ErrorOutput} />
            <button type="submit" disabled={props.isSubmitting} style={{display:"block", marginTop: "10px"}}>Checkout</button>
        </Form>
    )
}