import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';
import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBr,
    });


    return (
        <header className={styles.headerContainer}>
            <Image width="200" height="100" src="/logo-t-mataruco.png" alt="Logo de Thiago Mataruco" />

            <p>Ligando você a novos clientes</p>

            <span>{currentDate}</span>
        </header>
    )
}