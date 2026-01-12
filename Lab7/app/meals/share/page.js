'use client';

import { useState } from 'react';
import ImagePicker from './ImagePicker';
import { createMeal } from '@/lib/actions';
import classes from './page.module.css';

export default function ShareMealPage() {
  const [image, setImage] = useState(null);

  async function submit(formData) {
    if (!image) {
      alert('Dodaj obraz');
      return;
    }

    formData.append('image', image);
    await createMeal(formData);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={submit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="creator">Your name</label>
              <input type="text" id="creator" name="creator" required />
            </p>
            <p>
              <label htmlFor="creator_email">Your email</label>
              <input type="email" id="creator_email" name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker onPick={setImage} />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
