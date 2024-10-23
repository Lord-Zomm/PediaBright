import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Team() {
    return (
        <>
            <div className="team-container">
                <div className="team-member">
                    <img src="/images/meghan.png" alt="Meghan" />
                    <div className="overlay">
                        <div className="bio-text">PediaBright’s CEO, Meghan founded PediaBright with a mission to advance communication in childrens healthcare, while supporting children through their healthcare journey. Originally from Glen Ellyn, IL, Meghan moved to St. Louis, MO in 2017 to study at Saint Louis University. Meghan earned her Bachelor’s in Health Management (‘21) and Master’s in Health Administration (‘22). Outside of PediaBright, Meghan works as a Healthcare Administrator at Mercy Clinic and enjoys spending her free time with her pet dog and cat.</div>
                    </div>
                </div>
                <div className="team-member">
                    <img src="/images/nawal.png" alt="Nawal" />
                    <div className="overlay">
                        <div className="bio-text">Nawal is the chief technology officer of Pediabright and co-illustrator of our first trilogy on chronic kidney disease. She also joined the team at Saint Louis University, where she received her B.A. in computer science. After that, she attended Lindenwood University where she received her M.B.A. and is currently a second-year medical student at the University of Missouri School of Medicine. In her free time, she loves to play tennis and spend time with her family.</div>
                    </div>
                </div>
                <div className="team-member">
                    <img src="/images/lexi.png" alt="Lexi" />
                    <div className="overlay">
                        <div className="bio-text">Lexi Kayser is the chief creative officer of PediaBright and author of our first trilogy on chronic kidney disease. She met the rest of the team at Saint Louis University, where she received her B.A. in each journalism and research-intensive English. Lexi is currently based in Chicago and leads healthcare coverage at a nationally circulated magazine. In her free time, she loves listening to live music and taking long lakefront walks with her beagle, Oliver.</div>
                    </div>
                </div>
                <div className="team-member">
                    <img src="/images/aakash.png" alt="Aakash" />
                    <div className="overlay">
                        <div className="bio-text">Aakash Nagarapu is the chief scientific officer of PediaBright and collects the research and clinical science that supports our books. He also joined the team at Saint Louis University, where he graduated with a B.S. in biomedical engineering and is currently enrolled as a medical student. A native Chicagoan, he is currently based in St. Louis while connecting with physician partners around the country. In his free time, he enjoys making music with his friends, catching the latest movies, and discovering new coffee shops in St. Louis.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
