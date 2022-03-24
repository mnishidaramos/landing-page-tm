import Image from 'next/image';
import styles from './styles.module.scss';

export function Cover() {
    return (
        <div className={styles.coverContainer}>
            <div className={styles.summaryBox}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    natus tempora, reiciendis odio, eos aut explicabo repellendus facilis
                    porro illo at in officia aliquam eum corrupti molestiae consectetur cumque.
                    Reprehenderit.
                </p>
            </div>
            <div className={styles.contactBox}>
                <span className={styles.contactTitle}>Entre em contato conosco!</span>
                <form>
                    <div className={styles.inputBox}>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="exemplo@email.com"
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            placeholder="Digite sua mensagem"
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}