const projects_data = {
    programming_panda: {
        project_name: "Programming Panda",
        youtube_link: "https://www.youtube.com/watch?v=P3MScGjg8cY&t=1s&ab_channel=AntorMorsalin",
        github_link: "https://github.com/antor-morsalin/programming-panda",
        embed_link: "https://www.youtube.com/embed/P3MScGjg8cY",
        info_intro: "Porgramming Panda is a GUI application which children can use to learn the fundamentals of programming language and write very basic codes to test out what they have learned. I created this app on my 2nd semester of my undergraduate program for Introduction to Object Oriented Programming 1 course project. At that time I really wanted to make something way different and uique from the rest of the class and after brainstorming, I came up with Programming Panda.",
        info_insight: "Creating this app after less than 6 months of coding was a big challenge since I did not know much of data structures and algorithms at that time. So to write the code the compiles the user written code(Simplified Syntax), I had to use brute force approaches mostly and it took me a lot of thinking to implement the code for 'for-loop'. Looking back, it would have been much easier if I knew even the basic data strucutre back then, it was really tough for me to create the code for compilation at that time.",
        info_tech_stack: "Java was at the core of this application and Java Swing was used for the UI as these were in the requirements of the course project. Java File system was used to store information that was necessary to store, mainly the code the the user inputs and the compied code and some additional data. I used Canva to make the UI designs before implementing it on the application."
    },
    medi_track: {
        project_name: "MediTrack",
        youtube_link: "https://www.youtube.com/watch?v=QND6k1kVb0w&t=9s&ab_channel=AntorMorsalin",
        github_link: "https://github.com/antor-morsalin/MediTrack",
        embed_link: "https://www.youtube.com/embed/QND6k1kVb0w",
        info_intro: "MediTrack is a GUI application that lets pharmacy owners track their inventory across multiple outlets. I created this app for Object Oriented Prgramming 2 course project on my 4th semester.",
        info_insight: "By the time I created this app, I was very familiar to the principles of object oriented programming and had an easier time implementing the features that I decided to include. This project lets a pharmacy owner create several outlets inside the application and manage the inventory of each of the outlet as they like. The app has a demo list of medicines from which the user can add a stock of medicines with expiry date than they can check in the inventory section. I included a search option in the medicine list where the user can search medicine based on name, type, company and even get all the similar meds of a particular medicine with just one click. The user can discard of any medicine in the inventory section as they pleases. I followed additional principles such as parameterized sql query and modularity which I picked up along the way.",
        info_tech_stack: "C# was the primary language used in the project along with Windows Forms for UI. For database, MS SQL was used which was great for the specific project. I used Canva to make the UI designs before implementing it on the application."
    },
    robo_arm: {
        project_name: "Wirelessly Controlled Dual Axis Robotic Arm",
        youtube_link: "https://www.youtube.com/watch?v=T5zV3wkLKEY&ab_channel=AntorMorsalin",
        github_link: "https://github.com/antor-morsalin/Wireless-Dual-Axis-Robotic_Arm_Control",
        embed_link: "https://www.youtube.com/embed/T5zV3wkLKEY",
        info_intro: "For my Microprocessor and Embedded System Project, I decided to make a dual axis robotic arm that a person can control by waving and moving their hand to the direction they want to. When I was a kid, I saw a video where a fighter jet pilot was moving his head and the attached gun below the jet was following the direction of the pilot's head. It looked magnificent to me. So after learning the fundamentals of microporcessor alond with other Electrical Engineering fundamentals in the previous courses, I knew that I had to make something similar to what I saw in that video.",
        info_insight: "Although at first the idea looks really hard to implement, I problem down into several pieces. Measuring the coordinates/angles of my hand, sending them to the servo motors, setting those values to the servo motors. Now all of these individual problems are super easy to implement. To capture my coordinate/angles, I used MPU9250 but the magnetometer inside it was faulty so I ended up using it like a MPU6050. The measuring of YAW angle was a big challenge as I manually had to test it again and again, attach several filters to it intuitively to make it work. I wasn't really familiar with the mathematics of deriving roll, pitch and yaw from accelerometer and gyroscope so I had to comeup with not so efficient solution to this problem in the short time I had, but it still worked out well so I am not complaining. I recorded the angles in one ESP-32 and using ESP-NOW, I sent these values wirelessly to another ESP-32 which then set the values of the angles to the servo motors. It obviously wasn't working well at first but after a lot of debugging, testing and updating the parameters, I was happy with the final result.",
        info_tech_stack: "I used two ESP-32 for the microprocessors, ESP-NOW for wireless transmission of the angle data and C++ to program the two ESP-32" 
    },
    ann_heart_disease: {
        project_name: "Deep Learning (ANN) - Heart Disease Prediction",
        youtube_link: "https://www.youtube.com/watch?v=12_ApvYADpg&ab_channel=AntorMorsalin",
        github_link: "https://github.com/antor-morsalin/Deep-Learning-ANN---Heart-Diseases-Prediction",
        embed_link: "https://www.youtube.com/embed/12_ApvYADpg",
        info_intro: "This is a Deep Learning project where I have created an ANN model that predicts risks of heart attack. I have used UCI Heart Disease Dataset in order to train, test and evaluate the model.",
        info_insight: "I have spend months learning about deep learning fundamentals, theory and so on. The goal for this project was to implement things I have learned so far. While developing the model, I ran a lot of experiments that gave me a lot of insight about deep learning. The theories and fundamentals I learned really reflected on this project.",
        info_tech_stack: "I used PyTorch, Sklearn, Pandas, Matplotlib and Numpy for data analysis, data pre-processing, developing the ANN architecture, running experiments to determine the hyper parameters and finally evaluate and visualize and training and test accuracy of the model."
    },
    yelpcamp: {
        project_name: "YelpCamp",
        youtube_link: "https://www.youtube.com/watch?v=rYU3a1sizNU",
        github_link: "https://github.com/antor-morsalin/YelpCamp",
        embed_link: "https://www.youtube.com/embed/rYU3a1sizNU",
        info_intro: "This is a website for posting/reviewing campgrounds. This is the final project of a popular udemy web app development course from Colt Steel and this is my version of the project.",
        info_insight: "This was my first CRUD web app after I got the hang of web app development. Through this project, I could understand how a real life application in designed and how different parts of the program eg front end, backend, database, 3rd party apis and middleware, cloud hosting, file upload etc. come together to form a single functional project. Through this project, I also had great insight on authentication, authorization, protecting the routes, denying invalid access and so on.",
        info_tech_stack: "I used Express for backend, MongoDB for storing data, Tailwind for frontend, ejs for html templates, MVC architecture along with rest api design. I also used CLOUDINARY for hosting the images that are uploaded to the website."       
    },
    explored: {
        project_name: "Explored",
        youtube_link: "https://www.youtube.com/watch?v=GSj-T0uxx5A",
        github_link: "https://github.com/antor-morsalin/explored",
        embed_link: "https://www.youtube.com/embed/GSj-T0uxx5A",
        info_intro: "This is a travel forum website where people post their detailes travel experience to various places. People can also interact with other people's travel log through comments, review and add other travel log to wish-list. I along with a friend developed this application for our Web Technologies course at our university",
        info_insight: "This was my second web app project and it was really amazing to come up with and original idea and fully implement it. Although I used vanilla PHP, I could build the backend architecture of the project very fast with MVC and Restful api because previously I focused on understanding the principles and design patterns of backend engineering with Express and MongoDB rather than blindly memorizing the function names. I also developed a simple framework to help us add functionalities super fast.",
        info_tech_stack: "I used Vanilla PHP for backend, MySql for database and Tailwind for frontend."       
    }
};



const queryString = window.location.search;  

const params = new URLSearchParams(queryString);

const name = params.get("name");

//console.log(name);

const project_data =  projects_data[name];

//console.log(project_data)


const project_name = document.getElementById('project-name');
const youtube_link = document.getElementById('youtube-link');
const github_link = document.getElementById('github-link');
const video = document.getElementById('project-video');
const info_intro = document.getElementById('info-intro');
const info_insight = document.getElementById('info-insight');
const info_tech_stack = document.getElementById('info-tech-stack');

project_name.textContent = project_data['project_name'];
youtube_link.href = project_data['youtube_link'];
github_link.href = project_data['github_link'];
video.src = project_data['embed_link'];
info_intro.textContent = project_data['info_intro'];
info_insight.textContent = project_data['info_insight'];
info_tech_stack.textContent = project_data['info_tech_stack'];

