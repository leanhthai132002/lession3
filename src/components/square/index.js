import React, {useState} from 'react'
import styles from './square.module.css'

const Square = () => {
    const [status, setStatus] = useState(false)
    return <button onClick={() => setStatus(!status)} className={styles.square} >
        {status ? "X" : null}
    </button>
}

export default Square