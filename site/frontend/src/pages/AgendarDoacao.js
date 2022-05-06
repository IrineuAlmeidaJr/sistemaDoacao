import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function AgendarDoacao(props) {
    return (
        <div>
            <Header/>

            <div>
                <form>
                    <div>
                        <label for="nomeItem">Nome do item:</label><br/>
                        <input type="text" id="nomeItem" name="nomeItem"/>
                    </div>

                    <div>
                        <label></label>
                        <input/>
                    </div>

                    <div>
                        <label></label>
                        <input/>
                    </div>

                    <div>
                        <label></label>
                        <input/>
                    </div>

                    <div>
                        <label></label>
                        <input/>
                    </div>
                </form>
            </div>

            <Footer/>
        </div>
    );
}