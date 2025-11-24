import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';

export default function MainHeader()
{
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg.src} width={80} height={80} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                        <li>
                            <Link href="/meals">Meals</Link>
                        </li>
                    </ul>
            </nav>
      </header>
      </>
    );
}