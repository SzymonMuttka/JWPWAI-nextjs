'use client';

import classes from './error.module.css';

export default function Error() {
    return <main className={classes.error}>
        <h1>Wystąpił błąd</h1>
        <p>Nie udało się pobrać meals.</p>
        <p>Spróbuj ponownie wczytać stronę.</p>
    </main>
}