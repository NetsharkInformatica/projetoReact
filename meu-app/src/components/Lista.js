import styles from './Lista.module.css';
import Item from './Item'

function Lista() {
return(
< >
<ul className={styles.Lista}>
<Item marca="Ford"  lancamento={1985}/>
<Item marca= "Fiat" lancamento={1990}/>
<Item marca="Ferrari" lancamento={1988}/>
    
    </ul>
</>
)

}
export default Lista