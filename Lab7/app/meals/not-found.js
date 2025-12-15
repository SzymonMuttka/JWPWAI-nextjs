import classes from './not-found.module.css';

export default function NotFound() {
    return <main className={classes.not_found}>
        <h1>Nie znaleziono danego posiłku</h1>
        <p>Upewnij się, że nazwa posiłku została poprawnie wpisana.</p>
    </main>
}