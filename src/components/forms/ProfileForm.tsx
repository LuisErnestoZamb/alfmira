// components/ProfileForm.tsx
'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

type Profile = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
};

async function fetchProfile(id: string) {
  const res = await fetch(`/api/profiles/${id}`);
  if (!res.ok) throw new Error('Error loading profile');
  return res.json();
}

async function createProfile(data: Profile) {
  const res = await fetch('/api/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error creating profile');
  return res.json();
}

async function updateProfile(data: Profile) {
  const res = await fetch(`/api/profiles/${data.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error updating profile');
  return res.json();
}

export const ProfileForm = ({ id }: { id?: string }) => {

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => fetchProfile(id!),
    enabled: !!id,
  });

  const { register, handleSubmit, reset } = useForm<Profile>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
    },
  });

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  const createMutation = useMutation({
    mutationFn: createProfile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profiles'] }),
  });

  const updateMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profiles'] }),
  });

  const onSubmit = (values: Profile) => {
    if (id) updateMutation.mutate({ ...values, id });
    else createMutation.mutate(values);
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label>First name</label>
        <input {...register('first_name', { required: true })} className="border p-2 w-full" />
      </div>

      <div>
        <label>Last name</label>
        <input {...register('last_name', { required: true })} className="border p-2 w-full" />
      </div>

      <div>
        <label>Email</label>
        <input {...register('email', { required: true })} className="border p-2 w-full" />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-black text-white px-4 py-2"
      >
        {id ? 'Update Profile' : 'Create Profile'}
      </button>
    </form>
  );
}
