'use server';

import { supabase } from '@/lib/supabase';

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function createMeal(formData) {
  const title = formData.get('title');
  const slug = slugify(title);
  const image = formData.get('image');

  const imageName = `${slug}`;

  //upload obrazu
  const { error: uploadError } = await supabase.storage
    .from('meals')
    .upload(imageName, image);

  if (uploadError) throw new Error(uploadError.message);

  //public URL
  const { data } = supabase.storage
    .from('meals')
    .getPublicUrl(imageName);

  //insert
  const { error } = await supabase.from('meals').insert({
    slug,
    title,
    image: data.publicUrl,
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('creator'),
    creator_email: formData.get('creator_email'),
  });

  if (error) throw new Error(error.message);
}
