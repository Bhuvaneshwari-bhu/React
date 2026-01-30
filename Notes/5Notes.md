# CSS
Till now we have written css in index.css file for all.

So, if we have created a class btn and applied some style. We dont want it to be applied to all buttons .

So we go for module.css
We create a components folder in src
1) src>components
then create two more folders button and header
2) components> button,header

In button create Button.jsx in this import styles from 'Button.module.css' . in place of className='btn' -> className={styles.btn}
In  Button.module.css we have only styles of .btn

This will leads to styles.btn check its styles in imported file only.
