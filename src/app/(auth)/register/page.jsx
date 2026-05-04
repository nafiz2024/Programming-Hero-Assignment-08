'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiImage, FiLock, FiMail, FiUser } from 'react-icons/fi';
import navLogo from '../../../assets/NavLogo.png';
import { useForm } from 'react-hook-form';
import { authClient } from '../../../lib/auth-client';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunction = async (data) => {
    const { email, name, photoUrl, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: '/',
    });

    if (error) {
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }

    if (res) {
      toast.success(`Sign Up Successful`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto flex min-h-[calc(100vh-220px)] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-8 bg-[linear-gradient(160deg,_rgba(16,185,129,0.96),_rgba(5,150,105,0.92))] p-6 text-white sm:p-8 lg:p-10">
            <div className="space-y-4">
              <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-50">
                SkillSphere
              </span>
              <div className="space-y-3">
                <h1 className="max-w-sm text-3xl font-black leading-tight sm:text-4xl">
                  Start learning with one quick account.
                </h1>
                <p className="max-w-md text-sm leading-7 text-emerald-50/90">
                  Create your profile, join premium courses, and keep all your
                  learning progress in one place.
                </p>
              </div>
            </div>
            <div className="flex justify-center py-2 lg:py-8">
              <Image
                src={navLogo}
                alt="SkillSphere logo"
                className="h-24 w-24 object-contain sm:h-32 sm:w-32 lg:h-40 lg:w-40"
                priority
              />
            </div>
            <div className="grid gap-4 text-sm text-emerald-50/95 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl font-bold">10k+</p>
                <p>Learners building new skills every week</p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl font-bold">100%</p>
                <p>Your dashboard, certificates, and saved courses</p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-10">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 space-y-2 text-center lg:text-left">
                <span className="inline-flex rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-600">
                  Join SkillSphere
                </span>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                  Register
                </h2>
                <p className="text-sm leading-6 text-slate-500">
                  Create your account and start exploring courses today.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleRegisterFunction)}
                className="space-y-4"
              >
                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Name
                  </span>
                  <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                    <FiUser className="text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      {...register('name', {
                        required: 'Name field is required',
                      })}
                    />
                  </span>
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Email
                  </span>
                  <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                    <FiMail className="text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      {...register('email', {
                        required: 'Email field is required',
                      })}
                    />
                  </span>
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Photo URL
                  </span>
                  <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                    <FiImage className="text-slate-400" />
                    <input
                      type="url"
                      placeholder="https://your-photo-url.com"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      {...register('photoUrl', {
                        required: 'Photo URL field is required',
                      })}
                    />
                  </span>
                  {errors.photoUrl && (
                    <p className="text-sm text-red-500">
                      {errors.photoUrl.message}
                    </p>
                  )}
                </label>

                <label className="block space-y-2 relative">
                  <span className="text-sm font-semibold text-slate-700">
                    Password
                  </span>
                  <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                    <FiLock className="text-slate-400" />
                    <input
                      type={isShowPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      {...register('password', {
                        required: 'Password field is required',
                      })}
                    />
                  </span>
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  <span
                    className="absolute right-4 top-10 text-xl cursor-pointer"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn mt-2 h-12 w-full rounded-2xl border-0 bg-gradient-to-r from-orange-500 via-orange-500 to-amber-400 text-base font-bold text-white shadow-lg shadow-orange-200 hover:from-orange-600 hover:to-amber-500"
                >
                  Register
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Login to your account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
