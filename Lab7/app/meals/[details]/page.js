import classes from './page.module.css';
import { Suspense } from 'react';
import MealItem from '@/components/meals/meal-item';
import { getMeal } from '@/lib/meals';

async function Meal(slug) {
    const meal = await getMeal();
    console.log("slug: " + slug);
    console.log("test: " + meal);
    return <MealItem meal={meal} />;
}

export default function MealsDetalsPage() {
    return (
        <>
            <Suspense fallback={<p className={classes.loading}>Fetching meal...</p>}>
                <Meal />
            </Suspense>
        </>
    );
  }
  