import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import AdminLayout from '@/Shared/AdminLayout';
import DeleteButton from '@/Shared/DeleteButton';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import SelectInput from '@/Shared/SelectInput';
import FileInput from '@/Shared/FileInput';
import TrashedMessage from '@/Shared/TrashedMessage';
import { toFormData } from '@/utils';
import Swal from "sweetalert2";

export default () => {
    const { user, errors } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        id: user.id,
        name: user.name || '',
        email: user.email || '',
        password: user.password || '',
        password_confirmation: '',
        role: user.role || '0',
        photo: user.photo || '',
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    function handleFileChange(file) {
        setValues(values => ({
            ...values,
            photo: file
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.post(route('User.update', user.id), values).then(() => {
            setSending(false);
        });
    }

    function destroy() {
        Swal.fire({
            title: 'Apakah Kamu Yakin?',
            text: "Data User Akan Segera Dihapus!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                // Inertia.delete(route('User.destroy', user.id));
                Inertia.get(route('User.destroy', user.id));
            }
        })
    }

    function restore() {
        Swal.fire({
            title: 'Apakah Kamu Yakin?',
            text: "Data User Akan Segera Dipulihkan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                // Inertia.put(route('User.restore', {'User': user.id}))
                Inertia.post(route('User.restore', {'User': user.id}))
            }
        })
    }

    return (
        <AdminLayout>
            <div>
                <Helmet title="Labkom FMIPA UNS | User | Ubah Data" />
                <div className="mb-8 flex justify-start max-w-lg">
                    <h1 className="font-bold text-3xl">
                        <InertiaLink
                            as='a'
                            href={route('User.index')}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            User
                        </InertiaLink>
                        <span className="text-indigo-600 font-medium mx-2">/</span>
                        {values.name}
                    </h1>
                    {user.photo && (
                        <img className="block w-8 h-8 rounded-full ml-4" src={user.photo}  alt={user.name}/>
                    )}
                </div>
                {user.deleted_at && (
                    <TrashedMessage onRestore={restore}>
                        This user has been deleted.
                    </TrashedMessage>
                )}
                <div className="bg-white rounded shadow overflow-hidden max-w-3xl">
                    <form onSubmit={handleSubmit}>
                        <div className="p-8 -mr-6 -mb-8 flex flex-wrap">
                            <TextInput
                                className="pr-6 pb-8 w-full lg:w-1/2"
                                label="Nama"
                                name="name"
                                errors={errors.name}
                                value={values.name}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="pr-6 pb-8 w-full lg:w-1/2"
                                label="Email"
                                name="email"
                                type="email"
                                errors={errors.email}
                                value={values.email}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="pr-6 pb-8 w-full lg:w-1/2"
                                label="Password"
                                name="password"
                                type="password"
                                errors={errors.password}
                                value={values.password}
                                onChange={handleChange}
                            />
                            <TextInput
                                className="pr-6 pb-8 w-full lg:w-1/2"
                                label="Confirm Password"
                                name="password_confirmation"
                                type="password"
                                errors={errors.password_confirmation}
                                value={values.password_confirmation}
                                onChange={handleChange}
                            />
                            <SelectInput
                                className="pr-6 pb-8 w-full lg:w-1/2"
                                label="Role"
                                name="role"
                                errors={errors.role}
                                value={values.role}
                                onChange={handleChange}
                            >
                                <option value="0">Admin</option>
                            </SelectInput>
                            <FileInput
                                className="pr-6 pb-8 w-full lg:w-1/2"
                                label="Photo"
                                name="photo"
                                accept="image/*"
                                errors={errors.photo}
                                value={values.photo}
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center">
                            {!user.deleted_at && (
                                <DeleteButton onDelete={destroy}>Hapus</DeleteButton>
                            )}
                            <InertiaLink
                                href={route('User.index')}
                                className="text-indigo-600 hover:text-indigo-700 ml-auto mr-6"
                                as="a"
                            >
                                Kembali
                            </InertiaLink>
                            <LoadingButton
                                loading={sending}
                                type="submit"
                                className="btn-indigo"
                            >
                                Ubah Data
                            </LoadingButton>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};
