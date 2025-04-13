// export default function Register(){
//     return <>
//     <h2>Social Networking for Everyone</h2>
//     <input type="email" placeholder="Enter email"></input><br/>
//     <input type="password" placeholder="Password"></input><br/>
//     <button>Sign in</button>


    
//     </>
// }

import React from 'react';

const GroupsPanel = () => {
  const groups = [
    {
      title: 'Sample Group One',
      description: 'This is a Dobble social network sample group',
      imgSrc: 'img/group.png',
    },
    {
      title: 'Sample Group One',
      description: 'This is a Dobble social network sample group',
      imgSrc: 'img/group.png',
    },
    {
      title: 'Sample Group One',
      description: 'This is a Dobble social network sample group',
      imgSrc: 'img/group.png',
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="panel panel-default groups">
              <div className="panel-heading">
                <h3 className="panel-title">Latest Groups</h3>
              </div>
              <div className="panel-body">
                {groups.map((group, index) => (
                  <div key={index}>
                    <div className="group-item">
                      <img src={group.imgSrc} alt="Group" />
                      <h4>
                        <a href="#">{group.title}</a>
                      </h4>
                      <p>{group.description}</p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                ))}
                <a className="btn btn-primary" href="#">
                  View All Groups
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default GroupsPanel;
