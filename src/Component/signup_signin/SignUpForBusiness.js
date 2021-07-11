import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {dangKyApiAction} from "../../Redux/Action/QuanLyNguoiDungActions"
import logo from "../../Asset/Header/logo.png"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const signupUserSchema = yup.object().shape({
    tenUser: yup.string().required('*Họ tên không được bỏ trống!'),
    passWord: yup.string().required('*Mật khẩu không được bỏ trống!'),
    email: yup.string().required('*Email không được bỏ trống!').email('*Email không hợp lệ!'),
})



export default function SignUpForBusiness() {
    const dispatch = useDispatch()

    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight);
        }
    }, []);
    const handlesSubmit = async (values) => {
        const loaiUser = "business"
        const newValues = {...values, loaiUser}
        console.log(newValues)
        dispatch(await dangKyApiAction(newValues))
    }
    const [onOff, setOnOff] = useState(true)
    let onOffPassword = () => {
        setOnOff(!onOff)
    }
    return (
        <div>
            <div className='signUp ' style={{ backgroundImage: "url('./img/Login/duoc_mi_pham)", height }} >
            <Formik
                initialValues={{
                    tenUser: '',
                    passWord: '',
                    email: '',
                }}
                validationSchema={signupUserSchema}
                onSubmit={handlesSubmit}
                render={(formikProps) => (
                    <Form className='signUp__form khungHinh'>
                        <div className='signUp__form-logo'>
                        <a href='/'>
                                <div className="logoSignIn khungHinh">
                                    <img  className='' alt='...' src={logo} />
                                </div>
                            </a>
                        </div>

                        <h1 className='signUp__form-title mt-4' style={{fontWeight:"500"}}>Đăng ký</h1>
                        <i className="text-center ml-2">Business</i>
                        <div className="signUp__form-input ">
                            <div className='formSigup'>
                                <i className="fa fa-user-alt"></i>
                                <Field types='tenUser' name='tenUser' type="text" className="form-control" aria-describedby="ho" placeholder="Tên tổ chức" onChange={formikProps.handleChange} />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="tenUser" /></span>
                        </div>
                        <div className="signUp__form-input">
                            <div className='formSigup'>
                                <i className="fa fa-user-alt"></i>
                                <Field name='email' className="form-control" aria-describedby="email" placeholder="Email (email được dùng để đăng nhập)" onChange={formikProps.handleChange} />
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="email" /></span>
                        </div>
                        <div className="signUp__form-input">
                            <div className='formSigup'>
                                <i className="fa fa-lock"></i>
                                <Field type={onOff ? 'password' : 'text'} name='passWord' className="form-control" aria-describedby="passWord" placeholder="Mật khẩu" onChange={formikProps.handleChange} />
                                <div className='onOff__password' id='show' onClick={() => onOffPassword()}>
                                    <i className="fa fa-eye" style={{ display: `${onOff ? '' : 'none'}` }}></i>
                                    <i class="fa fa-eye-slash" style={{ display: `${onOff ? 'none' : 'block'}` }}></i>
                                </div>
                            </div>
                            <span style={{ color: 'red', fontStyle: 'italic' }}><ErrorMessage name="passWord" /></span>
                        </div>
                        
                        <div className="signUp__form-input ">
                            <button style={{fontWeight:"500"}} className='btn' type='submit'>Đăng ký</button>
                        </div>
                        <div className="signUp__form-note">
                            <span>Bạn dã có tài khoản? <NavLink to='/signup'>Đăng nhập</NavLink></span>
                        </div>
                    </Form>)} />
        </div>
        </div>
    )
}
