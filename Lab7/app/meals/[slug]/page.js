import classes from './page.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
import { getMeal } from '@/lib/meals';

export default async function MealsDetalsPage({params}) {
    const { slug } = await params;
    const meal = await getMeal(slug);

    return(
        <Suspense fallback={<p className={classes.loading}>Fetching meal...</p>}>
            <article className={classes.meal}>
                <header>
                    <div className={classes.image}>
                        <Image src={meal.image} alt={meal.title} fill />
                    </div>
                    <div className={classes.headerText}>
                        <h2>{meal.title}</h2>
                        <p>by {meal.creator} ({meal.creator_email})</p>
                    </div>
                </header>
                <div className={classes.content}>
                    <p className={classes.summary}>{meal.summary}</p>
                    <p className={classes.instructions}>{meal.instructions}</p>
                </div>
        </article>
        </Suspense>
        
    );
}
  