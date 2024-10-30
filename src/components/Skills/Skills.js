import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import './Skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2 className="pixel-text-1">Skills</h2>
              <div className="skill-description">
                <p className="pixel-text-2">
                I'm passionate about learning core Computer Science with interests in 
                web development, DevOps for automation and collaboration in software delivery, 
                and Web3, which emphasizes decentralized applications and blockchain technology. 
                Additionally, I enjoy creating 2D games, merging creativity with technology to deliver engaging experiences.
                </p>
              </div >
              <div classname="skill-badge">
                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/c-%2300599C.svg?style=plastic&logo=c&logoColor=white" alt="C Language" />
                </a>

                <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white" alt="C++" />
                </a>

                <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/html-%23E34F26.svg?style=plastic&logo=html5&logoColor=white" alt="HTML" />
                </a>

                <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/css-%231572B6.svg?style=plastic&logo=css3&logoColor=white" alt="CSS" />
                </a>

                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=plastic&logo=react&logoColor=black" alt="React" />
                </a>

                <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/hardhat-%23E9AD0F.svg?style=plastic&logo=hardhat&logoColor=black" alt="Hardhat" />
                </a>

                <a href="https://thirdweb.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/thirdweb-%23443098.svg?style=plastic&logo=thirdweb&logoColor=white" alt="Thirdweb" />
                </a>

                <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/aws-%23FF9900.svg?style=plastic&logo=amazon-aws&logoColor=white" alt="AWS" />
                </a>
                <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/jenkins-%23D24939.svg?style=plastic&logo=jenkins&logoColor=white" alt="Jenkins" />
                </a>


                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white" alt="GitHub" />
                </a>

                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/git-%23F05033.svg?style=plastic&logo=git&logoColor=white" alt="Git" />
                </a>
                <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/solidity-%23363636.svg?style=plastic&logo=solidity&logoColor=white" alt="Solidity" />
                </a>

                <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/unity-%23000000.svg?style=plastic&logo=unity&logoColor=white" alt="Unity Engine" />
                </a>

                <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/remix%20ide-%23151F30.svg?style=plastic&logo=ethereum&logoColor=white" alt="Remix IDE" />
                </a>

                <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/yaml-%23000000.svg?style=plastic&logo=yaml&logoColor=white" alt="YAML" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=plastic&logo=javascript&logoColor=black" alt="JavaScript" />
                </a>

                <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/linux-%23FCC624.svg?style=plastic&logo=linux&logoColor=black" alt="Linux" />
                </a>

                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=plastic&logo=vite&logoColor=white" alt="Vite" />
                </a>

                <a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/CI%2FCD%20Basics-%23007ACC.svg?style=plastic&logo=azure-pipelines&logoColor=white" alt="CI/CD Basics" />
                </a>
                <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/premiere%20pro-%230066FF.svg?style=plastic&logo=adobe-premiere-pro&logoColor=white" alt="Premiere Pro" />
                </a>

                <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/photoshop-%2331A8FF.svg?style=plastic&logo=adobe-photoshop&logoColor=white" alt="Photoshop" />
                </a>
                <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer" >
                    <img src="https://img.shields.io/badge/matlab-%23E67C22.svg?style=plastic&logo=matlab&logoColor=white" alt="MATLAB" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

