import React from 'react';
import styles from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {

    const signInLink = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };

    const history = useHistory();
    function startRegister(){
        history.push('/register');
        console.log("button clicked !");
    }
    return(
        <div className={styles.cardWrapper}>
            <Card 
                title="Welcome to CodersHouse !"
                icon="logo"
            >
                 <p className={styles.text}>
                We’re working hard to get Codershouse ready for everyone!
                While we wrap up the finishing youches, we’re adding people
                gradually to make sure nothing breaks
            </p>
            <div>
               <Button
                    onClick={startRegister} 
                    text="Get your Username"
               >

               </Button>
            </div>
            <div className={styles.signInWrapper}>
                <span className={styles.hasInvite}>Have an Invite Text !</span>
                <Link style={signInLink} to="/login">Sign in</Link>
            </div>
            </Card>
        </div> 
            
        
           
       
    );
}

export default Home;


