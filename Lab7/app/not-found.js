import classes from './not-found.module.css';

export default function NotFound() {
    return <main className={classes.not_found}>
        <h1>Strona, której szukasz, nie istnieje</h1>
        <p>Upewnij się, że adres strony został wpisany poprawnie</p>
    </main>
}