import { MdConstruction } from 'react-icons/md';
import styles from './styles.module.scss';

export function Modal(props) {
    if (!props.showModal) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Seja bem-vindo!
                    </h1>
                </div>

                <div className={styles.body}>
                    <p>
                        No momento, este site está em construção.
                    </p>
                    <p>
                        É possível sua vizualização, porém lembramos que é um projeto não finalizado.
                    </p>
                    <p>
                        Agradecemos a compreensão!
                    </p>
                    <div className={styles.toolIcon}>
                        <MdConstruction size="7rem" />
                    </div>
                </div>

                <div className={styles.footer}>
                    <button onClick={() => props.setShowModal(!props.showModal)} className={styles.closeButton}>Ok</button>
                </div>
            </div>
        </div>
    );
}