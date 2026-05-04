'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authClient } from '../../../lib/auth-client';
import { FiArrowLeft, FiLock, FiMail, FiSave, FiUser } from 'react-icons/fi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (session?.user) {
      reset({
        name: session.user.name || '',
        email: session.user.email || '',
        password: '',
      });
    }
  }, [session, reset]);

  const onSubmit = async (formData) => {
    if (!session?.user) {
      toast.error('Please login first', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    const newName = formData.name.trim();
    const newEmail = formData.email.trim();
    const newPassword = formData.password.trim();

    const oldName = session.user.name || '';
    const oldEmail = session.user.email || '';

    const nameChanged = newName !== oldName;
    const emailChanged = newEmail !== oldEmail;
    const passwordChanged = newPassword !== '';

    if (!nameChanged && !emailChanged && !passwordChanged) {
      toast.info('No changes found', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    try {
      setLoading(true);

      if (nameChanged) {
        const { error } = await authClient.updateUser({
          name: newName,
        });

        if (error) {
          toast.error(error.message, {
            position: 'top-center',
            autoClose: 3000,
          });
          setLoading(false);
          return;
        }
      }

      if (emailChanged) {
        const { error } = await authClient.changeEmail({
          newEmail: newEmail,
          callbackURL: '/profile',
        });

        if (error) {
          toast.error(error.message, {
            position: 'top-center',
            autoClose: 3000,
          });
          setLoading(false);
          return;
        }
      }

      if (passwordChanged) {
        const { error } = await authClient.setPassword({
          newPassword: newPassword,
        });

        if (error) {
          toast.error(error.message, {
            position: 'top-center',
            autoClose: 3000,
          });
          setLoading(false);
          return;
        }
      }

      toast.success('Profile updated successfully', {
        position: 'top-center',
        autoClose: 3000,
      });

      router.push('/profile');
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-3 py-8 sm:px-4 sm:py-10 lg:px-6 lg:py-14">
      <div className="mx-auto flex min-h-[calc(100vh-220px)] max-w-[38rem] items-center justify-center">
        <div className="w-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 space-y-3 text-center sm:text-left">
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
                >
                  <FiArrowLeft />
                  Back to profile
                </Link>

                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                    Update Profile
                  </h2>
                  <p className="text-sm leading-6 text-slate-500">
                    Edit your information and save the latest version of your
                    SkillSphere account.
                  </p>
                </div> 
              </div>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

                <label className="block space-y-2 relative">
                  <span className="text-sm font-semibold text-slate-700">
                    New Password
                  </span>
                  <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm shadow-slate-100 transition focus-within:border-emerald-400 focus-within:bg-white">
                    <FiLock className="text-slate-400" />
                    <input
                      type="password"
                      placeholder="Update your password"
                      className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      {...register('password')}
                    />
                    <span
                      className="absolute right-4 top-10 text-xl cursor-pointer"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                      {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isPending || loading}
                  className="btn mt-2 h-12 w-full rounded-2xl border-0 bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 text-base font-bold text-white shadow-[0_16px_30px_-18px_rgba(249,115,22,0.85)] hover:from-amber-500 hover:via-orange-500 hover:to-orange-600"
                >
                  <FiSave className="text-lg" />
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfilePage;
