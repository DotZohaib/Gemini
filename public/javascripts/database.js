function askQuestion() {
    var messageInput = document.getElementById("message-input");
    var question = messageInput.value;
  
    if (question.trim() !== "") {
        var chatWindow = document.getElementById("chat-window");
        var newMessage = document.createElement("div");
  
        // Simple predefined answers based on the question
        var answer = getAnswer(question);
        
        // Update the message format to separate user and bot messages
        var userMessage = document.createElement("div");
        userMessage.textContent = question;  // Remove "User: " prefix
        userMessage.className = "user-message";  // Add class for styling
  
        var botMessage = document.createElement("div");
        botMessage.textContent = answer;
        botMessage.className = "bot-message";  // Add class for styling
  
        newMessage.appendChild(userMessage);
        newMessage.appendChild(botMessage);
  
        chatWindow.appendChild(newMessage);
    }
  
    // Clear the input field
    messageInput.value = "";
  }
  
  
  function getAnswer(question) {
  
    if (question.includes("zohaib dayo")) {
        return "Zohaib Ali Dayo, a skilled programmer and hacker from Pakistan, currently studies at Sindh Madressatul Islam University. Passionate about technology and cybersecurity, Zohaib aims for a future at Google, showcasing proficiency in multiple programming languages, app, and web development. Actively engaged in both academics and extracurricular activities, his commitment to continuous learning and innovation sets him apart. Zohaib's journey reflects academic excellence, technological prowess, and a vision for shaping the digital future, making him poised to contribute significantly to the evolving tech landscape.";
    } else if (question.includes("html")) {
        return "HTML stands for HyperText Markup Language. It is used for structuring content on the web. It defines the elements that make up a web page, such as headings, paragraphs, lists, and links.";
    } else if (question.includes("css")) {
        return "CSS stands for Cascading Style Sheets. It is used for styling the visual presentation of web pages. It controls the layout, colors, fonts, and other visual aspects of web content.";
    }
    else if (question.includes("javascript")) {
        return "JavaScript is a programming language that enables interactive web pages. It allows you to create dynamic content, handle user input, and make web pages more responsive and engaging.";
    } else if (question.includes("database")) {
        return "A database is a structured collection of data that is stored electronically. It can be used to store and organize a wide variety of information, such as customer records, product information, or website content.";
    } else if (question.includes("data")) {
        return "Data is any collection of facts, figures, or information that can be processed by a computer. It can be stored in various formats, such as text, numbers, images, or videos. In the context of databases, data is organized into tables and can be queried to retrieve specific information.";
    } else if (question.includes("programming")) {
        return "Programming is the process of creating a set of instructions that tell a computer how to perform a task. It involves designing, writing, testing, and maintaining the source code of computer programs.";
    } else if (question.includes("frontend")) {
        return "Frontend development involves creating the visual part of a website or web application that users interact with. It utilizes HTML, CSS, and JavaScript to build user interfaces that are responsive and user-friendly.";
    } else if (question.includes("backend")) {
        return "Backend development focuses on the server-side of web development. It involves building and maintaining the server, database, and application logic that support the frontend and enable the functionality of web applications.";
    } else if (question.includes("api")) {
        return "API, or Application Programming Interface, defines how software components should interact. It enables communication between different software systems, allowing them to exchange data and functionality.";
    } else if (question.includes("cloud computing")) {
        return "Cloud computing is a technology that provides access to computing resources (such as servers, storage, databases) over the internet. It offers flexibility, scalability, and on-demand access to resources without the need for physical infrastructure.";
    } else if (question.includes("machine learning")) {
        return "Machine learning is a subset of artificial intelligence that focuses on the development of algorithms and models that enable computers to learn and make predictions based on data, without being explicitly programmed.";
    } else if (question.includes("cybersecurity")) {
        return "Cybersecurity involves practices and measures to protect computer systems, networks, and data from unauthorized access, attacks, and damage. It aims to ensure the confidentiality, integrity, and availability of information.";
    } else if (question.includes("git")) {
        return "Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate on a project and keeps a history of changes.";
    } else if (question.includes("responsive design")) {
        return "Responsive design is an approach to web design that ensures web pages render well on various devices and screen sizes. It involves using flexible grids and layouts to adapt to different viewing environments.";
    } else if (question.includes("agile methodology")) {
        return "Agile methodology is an iterative and flexible approach to software development. It emphasizes collaboration, customer feedback, and the ability to adapt to changing requirements throughout the development process.";
    } else if (question.includes("user experience")) {
        return "User experience (UX) refers to the overall experience that a person has while interacting with a product or system. It encompasses usability, accessibility, and the emotional response of users.";
    } else if (question.includes("algorithm")) {
        return "An algorithm is a step-by-step procedure or set of rules for solving a specific problem or accomplishing a task. Algorithms are fundamental to computer science and are used in various applications, from sorting data to solving complex problems.";
    } else if (question.includes("web development")) {
        return "Web development is the process of creating and maintaining websites or web applications. It involves both frontend development (user interface) and backend development (server-side logic and databases).";
    } else if (question.includes("artificial intelligence")) {
        return "Artificial Intelligence (AI) is a field of computer science that focuses on creating machines capable of intelligent behavior. AI involves the development of algorithms that enable machines to learn, reason, and solve problems.";
    } else if (question.includes("internet of things")) {
        return "The Internet of Things (IoT) refers to the network of interconnected devices that can communicate and exchange data. These devices, ranging from everyday objects to industrial machines, can collect and share information to enhance automation and efficiency.";
    } else if (question.includes("network security")) {
        return "Network security involves measures and strategies to protect computer networks from unauthorized access, attacks, and data breaches. It includes the use of firewalls, encryption, and other security protocols.";
    } else if (question.includes("web server")) {
        return "A web server is software that handles requests from clients (web browsers) and serves web pages or other resources. It processes HTTP requests, retrieves the requested content, and sends it back to the client.";
    } else if (question.includes("linux")) {
        return "Linux is an open-source operating system kernel that serves as the foundation for various Unix-like operating systems. It is widely used in servers, embedded systems, and as the basis for other operating systems like Android.";
    } else if (question.includes("virtual reality")) {
        return "Virtual Reality (VR) is a computer-generated simulation of a three-dimensional environment that users can interact with using special equipment, such as VR headsets. It provides an immersive and realistic experience.";
    } else if (question.includes("blockchain")) {
        return "Blockchain is a decentralized and distributed ledger technology used to record transactions across multiple computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.";
    } else if (question.includes("docker")) {
        return "Docker is a platform for developing, shipping, and running applications in containers. Containers allow developers to package an application with all of its dependencies, ensuring consistent deployment across different environments.";
    } else if (question.includes("big data")) {
        return "Big Data refers to large and complex datasets that are difficult to process using traditional data processing applications. It involves the use of advanced technologies to analyze, store, and extract valuable insights from massive volumes of data.";
    } else if (question.includes("cloud-native")) {
        return "Cloud-native refers to building and running applications that fully leverage the advantages of cloud computing. It involves designing applications specifically for the cloud, utilizing microservices architecture, and adopting DevOps practices.";
    } else if (question.includes("framework")) {
        return "A framework is a pre-built set of tools, libraries, and best practices that provides a foundation for developing software applications. Frameworks streamline the development process by offering a structured and reusable foundation.";
    } else if (question.includes("continuous integration")) {
        return "Continuous Integration (CI) is a software development practice where code changes are automatically built, tested, and integrated into the shared repository multiple times a day. CI helps identify and address issues early in the development process.";
    } else if (question.includes("devops")) {
        return "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and deliver high-quality software continuously by fostering collaboration and automation.";
    } else if (question.includes("microservices")) {
        return "Microservices architecture is an approach to developing software as a collection of small, independent services that communicate through well-defined APIs. It allows for greater flexibility, scalability, and ease of maintenance.";
    } else if (question.includes("internet protocols")) {
        return "Internet Protocols are a set of rules governing the communication and data exchange between devices on the Internet. Examples include TCP/IP (Transmission Control Protocol/Internet Protocol) and HTTP (Hypertext Transfer Protocol).";
    } else if (question.includes("scalability")) {
        return "Scalability refers to the ability of a system or application to handle an increasing amount of work, or its potential to be enlarged to accommodate growth. Scalable systems can efficiently grow to meet higher demand.";
    } else if (question.includes("encryption")) {
        return "Encryption is the process of converting information into a code to prevent unauthorized access. It is widely used to protect sensitive data during transmission and storage, ensuring confidentiality and security.";
    } else if (question.includes("data science")) {
        return "Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract insights and knowledge from structured and unstructured data. It combines expertise from statistics, mathematics, and computer science.";
    } else if (question.includes("containerization")) {
        return "Containerization is a lightweight form of virtualization that encapsulates an application and its dependencies into a container. Containers provide consistency across different development, testing, and deployment environments.";
    } else if (question.includes("frontend framework")) {
        return "A frontend framework is a pre-built collection of tools, libraries, and components that facilitates the development of the user interface (UI) of a web application. Examples include React, Angular, and Vue.js.";
    } else if (question.includes("backend framework")) {
        return "A backend framework is a pre-built set of tools, libraries, and components that streamlines the development of server-side logic and APIs in a web application. Examples include Django (Python), Ruby on Rails (Ruby), and Express.js (JavaScript).";
    } else if (question.includes("mobile app development")) {
        return "Mobile app development involves creating software applications that run on mobile devices, such as smartphones and tablets. It includes both iOS app development (for Apple devices) and Android app development.";
    } else if (question.includes("web security")) {
        return "Web security encompasses measures and practices to protect web applications and websites from various security threats, including unauthorized access, data breaches, and attacks. It includes the use of encryption, secure coding practices, and regular security audits.";
    } else if (question.includes("software testing")) {
        return "Software testing is the process of evaluating a software application to identify and fix defects or bugs. It ensures that the software meets specified requirements and functions correctly. Testing can include unit testing, integration testing, and user acceptance testing.";
    } else if (question.includes("cloud service models")) {
        return "Cloud service models refer to the categories of services provided by cloud computing providers. The main models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each model offers different levels of control and management.";
    } else if (question.includes("web hosting")) {
        return "Web hosting is the service that allows individuals and organizations to make their websites accessible on the internet. Web hosting providers offer storage space, bandwidth, and other resources needed to store and deliver website content.";
    } else if (question.includes("javascript framework")) {
        return "A JavaScript framework is a pre-built collection of tools, libraries, and conventions that simplifies the development of JavaScript applications. Examples include React, Angular, and Vue.js, which are commonly used for building dynamic and interactive user interfaces.";
    } else if (question.includes("data visualization")) {
        return "Data visualization is the presentation of data in a graphical or visual format. It aims to help people understand the patterns, trends, and insights within the data. Tools like charts, graphs, and maps are commonly used for data visualization.";
    }else if (question.includes("cloud computing")) {
        return "Cloud computing is a technology that provides access to computing resources over the internet. It allows users to utilize computing power, storage, and services without the need for owning physical hardware.";
      } else if (question.includes("data science")) {
        return "Data science is a multidisciplinary field that involves extracting insights and knowledge from structured and unstructured data. It combines skills from statistics, mathematics, and computer science.";
      } else if (question.includes("blockchain")) {
        return "Blockchain is a decentralized and distributed ledger technology. It records transactions across multiple computers, ensuring security and immutability.";
      } else if (question.includes("artificial intelligence")) {
        return "Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. It includes machine learning, natural language processing, and computer vision.";
      } else if (question.includes("cybersecurity")) {
        return "Cybersecurity involves practices and measures to protect computer systems, networks, and data from unauthorized access, attacks, and damage.";
      } else if (question.includes("internet of things")) {
        return "The Internet of Things (IoT) refers to the network of interconnected devices that can communicate and share data. It enables automation and information exchange between devices.";
      } else if (question.includes("containerization")) {
        return "Containerization is a lightweight form of virtualization that encapsulates an application and its dependencies into a container. It ensures consistency across different environments.";
      } else if (question.includes("machine learning")) {
        return "Machine learning is a subset of AI that focuses on developing algorithms and models that enable computers to learn and make predictions based on data.";
      } else if (question.includes("responsive design")) {
        return "Responsive design is an approach to web design that ensures web pages adapt to different devices and screen sizes, providing an optimal viewing experience.";
      } else if (question.includes("big data")) {
        return "Big Data refers to large and complex datasets that are challenging to process with traditional methods. It involves using advanced technologies to analyze and extract insights.";
      } else if (question.includes("devops")) {
        return "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and improve collaboration.";
      } else if (question.includes("agile methodology")) {
        return "Agile methodology is an iterative and flexible approach to software development. It emphasizes collaboration, customer feedback, and the ability to adapt to changing requirements.";
      } else if (question.includes("cloud service models")) {
        return "Cloud service models include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each model offers different levels of control and management.";
      } else if (question.includes("frontend framework")) {
        return "A frontend framework is a pre-built collection of tools and libraries that simplifies the development of the user interface in web applications. Examples include React, Angular, and Vue.js.";
      } else if (question.includes("backend framework")) {
        return "A backend framework is a pre-built set of tools and libraries that streamlines the development of server-side logic and APIs in web applications. Examples include Django, Ruby on Rails, and Express.js.";
      } else if (question.includes("mobile app development")) {
        return "Mobile app development involves creating software applications for mobile devices such as smartphones and tablets. It includes both iOS and Android app development.";
      } else if (question.includes("web security")) {
        return "Web security encompasses measures to protect web applications and websites from security threats, including unauthorized access and data breaches. It involves encryption, secure coding, and regular security audits.";
      } else if (question.includes("software testing")) {
        return "Software testing is the process of evaluating a software application to identify and fix defects or bugs. It ensures that the software meets specified requirements and functions correctly.";
      } else if (question.includes("continuous integration")) {
        return "Continuous Integration (CI) is a software development practice where code changes are automatically built, tested, and integrated into the shared repository multiple times a day.";
      } else if (question.includes("web hosting")) {
        return "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It provides storage space, bandwidth, and other resources.";
      } else if (question.includes("javascript framework")) {
        return "A JavaScript framework is a pre-built collection of tools and conventions that simplifies the development of JavaScript applications. Examples include React, Angular, and Vue.js.";
      } else if (question.includes("data visualization")) {
        return "Data visualization is the presentation of data in a graphical or visual format to help people understand patterns, trends, and insights within the data.";
      } else if (question.includes("cloud-native")) {
        return "Cloud-native refers to building and running applications that fully leverage the advantages of cloud computing, including microservices architecture and DevOps practices.";
      } else if (question.includes("framework")) {
        return "A framework is a pre-built set of tools, libraries, and conventions that provides a foundation for developing software applications. Frameworks streamline the development process.";
      } else if (question.includes("internet protocols")) {
        return "Internet Protocols are a set of rules governing communication and data exchange between devices on the Internet. Examples include TCP/IP and HTTP.";
      } else if (question.includes("scalability")) {
        return "Scalability refers to the ability of a system or application to handle an increasing amount of work or to be enlarged to accommodate growth. Scalable systems efficiently meet higher demand.";
      } else if (question.includes("encryption")) {
        return "Encryption is the process of converting information into code to prevent unauthorized access. It is widely used to protect sensitive data during transmission and storage.";
      } else if (question.includes("data analytics")) {
        return "Data analytics involves examining and interpreting data to extract useful insights. It includes techniques such as statistical analysis, predictive modeling, and data mining.";
      } else if (question.includes("user interface design")) {
        return "User Interface (UI) design focuses on creating visually appealing and user-friendly interfaces for software applications. It involves considerations for layout, typography, and color schemes.";
      } else if (question.includes("network architecture")) {
        return "Network architecture refers to the design and organization of a computer network. It includes the arrangement of hardware and software components to enable communication and data exchange.";
      } else if (question.includes("algorithm")) {
        return "An algorithm is a step-by-step procedure or set of rules for solving a specific problem or accomplishing a task. Algorithms are fundamental to computer science and are used in various applications.";
      }else if (question.includes("data science")) {
        return "Data science is a multidisciplinary field that involves extracting insights and knowledge from structured and unstructured data. It combines skills from statistics, mathematics, and computer science.";
      } else if (question.includes("blockchain")) {
        return "Blockchain is a decentralized and distributed ledger technology. It records transactions across multiple computers, ensuring security and immutability.";
      } else if (question.includes("artificial intelligence")) {
        return "Artificial Intelligence (AI) involves creating machines that can perform tasks that typically require human intelligence. It includes machine learning, natural language processing, and computer vision.";
      } else if (question.includes("cybersecurity")) {
        return "Cybersecurity involves practices and measures to protect computer systems, networks, and data from unauthorized access, attacks, and damage.";
      } else if (question.includes("internet of things")) {
        return "The Internet of Things (IoT) refers to the network of interconnected devices that can communicate and share data. It enables automation and information exchange between devices.";
      } else if (question.includes("containerization")) {
        return "Containerization is a lightweight form of virtualization that encapsulates an application and its dependencies into a container. It ensures consistency across different environments.";
      } else if (question.includes("machine learning")) {
        return "Machine learning is a subset of AI that focuses on developing algorithms and models that enable computers to learn and make predictions based on data.";
      } else if (question.includes("responsive design")) {
        return "Responsive design is an approach to web design that ensures web pages adapt to different devices and screen sizes, providing an optimal viewing experience.";
      } else if (question.includes("big data")) {
        return "Big Data refers to large and complex datasets that are challenging to process with traditional methods. It involves using advanced technologies to analyze and extract insights.";
      } else if (question.includes("devops")) {
        return "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and improve collaboration.";
      } else if (question.includes("agile methodology")) {
        return "Agile methodology is an iterative and flexible approach to software development. It emphasizes collaboration, customer feedback, and the ability to adapt to changing requirements.";
      } else if (question.includes("cloud service models")) {
        return "Cloud service models include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each model offers different levels of control and management.";
      } else if (question.includes("frontend framework")) {
        return "A frontend framework is a pre-built collection of tools and libraries that simplifies the development of the user interface in web applications. Examples include React, Angular, and Vue.js.";
      } else if (question.includes("backend framework")) {
        return "A backend framework is a pre-built set of tools and libraries that streamlines the development of server-side logic and APIs in web applications. Examples include Django, Ruby on Rails, and Express.js.";
      } else if (question.includes("mobile app development")) {
        return "Mobile app development involves creating software applications for mobile devices such as smartphones and tablets. It includes both iOS and Android app development.";
      } else if (question.includes("web security")) {
        return "Web security encompasses measures to protect web applications and websites from security threats, including unauthorized access and data breaches. It involves encryption, secure coding, and regular security audits.";
      } else if (question.includes("software testing")) {
        return "Software testing is the process of evaluating a software application to identify and fix defects or bugs. It ensures that the software meets specified requirements and functions correctly.";
      } else if (question.includes("continuous integration")) {
        return "Continuous Integration (CI) is a software development practice where code changes are automatically built, tested, and integrated into the shared repository multiple times a day.";
      } else if (question.includes("web hosting")) {
        return "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It provides storage space, bandwidth, and other resources.";
      } else if (question.includes("javascript framework")) {
        return "A JavaScript framework is a pre-built collection of tools and conventions that simplifies the development of JavaScript applications. Examples include React, Angular, and Vue.js.";
      } else if (question.includes("data visualization")) {
        return "Data visualization is the presentation of data in a graphical or visual format to help people understand patterns, trends, and insights within the data.";
      } else if (question.includes("cloud-native")) {
        return "Cloud-native refers to building and running applications that fully leverage the advantages of cloud computing, including microservices architecture and DevOps practices.";
      } else if (question.includes("framework")) {
        return "A framework is a pre-built set of tools, libraries, and conventions that provides a foundation for developing software applications. Frameworks streamline the development process.";
      } else if (question.includes("internet protocols")) {
        return "Internet Protocols are a set of rules governing communication and data exchange between devices on the Internet. Examples include TCP/IP and HTTP.";
      } else if (question.includes("scalability")) {
        return "Scalability refers to the ability of a system or application to handle an increasing amount of work or to be enlarged to accommodate growth. Scalable systems efficiently meet higher demand.";
      } else if (question.includes("encryption")) {
        return "Encryption is the process of converting information into code to prevent unauthorized access. It is widely used to protect sensitive data during transmission and storage.";
      } else if (question.includes("data analytics")) {
        return "Data analytics involves examining and interpreting data to extract useful insights. It includes techniques such as statistical analysis, predictive modeling, and data mining.";
      } else if (question.includes("user interface design")) {
        return "User Interface (UI) design focuses on creating visually appealing and user-friendly interfaces for software applications. It involves considerations for layout, typography, and color schemes.";
      } else if (question.includes("network architecture")) {
        return "Network architecture refers to the design and organization of a computer network. It includes the arrangement of hardware and software components to enable communication and data exchange.";
      } else if (question.includes("algorithm")) {
        return "An algorithm is a step-by-step procedure or set of rules for solving a specific problem or accomplishing a task. Algorithms are fundamental to computer science and are used in various applications.";
      } else if (question.includes("new words")) {
        return "New words are terms or vocabulary that have been recently introduced into a language.";
       } else if (question.includes("tom hanks")) {
        return "Tom Hanks is an American actor and filmmaker. He is widely regarded as one of the greatest actors in the world and has received numerous awards for his performances.";
      } else if (question.includes("meryl streep")) {
        return "Meryl Streep is an acclaimed American actress known for her versatility and extraordinary talent. She has won multiple Academy Awards and is considered one of the finest actresses in the film industry.";
      } else if (question.includes("leonardo dicaprio")) {
        return "Leonardo DiCaprio is an Oscar-winning American actor and environmental activist. He has been praised for his roles in various films, including Titanic, Inception, and The Revenant.";
      } else if (question.includes("cate blanchett")) {
        return "Cate Blanchett is an Australian actress known for her powerful performances in a wide range of roles. She has received multiple awards, including two Academy Awards, for her contributions to the film industry.";
      } else if (question.includes("denzel washington")) {
        return "Denzel Washington is a highly respected American actor and filmmaker. He has won two Academy Awards and is known for his impactful performances in films like Training Day and Malcolm X.";
      } else if (question.includes("julia roberts")) {
        return "Julia Roberts is an American actress and producer who gained fame with her roles in romantic comedies and dramas. She has received Academy Awards for her performances in Erin Brockovich.";
      } else if (question.includes("johnny depp")) {
        return "Johnny Depp is an iconic American actor and producer known for his diverse roles in films such as Pirates of the Caribbean, Edward Scissorhands, and Sweeney Todd. He is recognized for his unique and eccentric characters.";
      } else if (question.includes("angelina jolie")) {
        return "Angelina Jolie is an American actress, filmmaker, and humanitarian. She has received critical acclaim for her performances in films like Girl, Interrupted, and has been involved in various humanitarian efforts.";
      } else if (question.includes("brad pitt")) {
        return "Brad Pitt is an American actor and film producer. He has received numerous awards, including an Academy Award for his role in Once Upon a Time in Hollywood. Pitt is known for his versatility and charismatic presence on-screen.";
      } else if (question.includes("charlize theron")) {
        return "Charlize Theron is a South African and American actress known for her powerful and transformative performances. She won an Academy Award for her role in Monster and has appeared in various successful films.";
      } else if (question.includes("morgan freeman")) {
        return "Morgan Freeman is an esteemed American actor and film narrator. He has received acclaim for his roles in The Shawshank Redemption, Driving Miss Daisy, and Million Dollar Baby.";
      } else if (question.includes("cate blanchett")) {
        return "Cate Blanchett is an Australian actress known for her powerful performances in a wide range of roles. She has received multiple awards, including two Academy Awards, for her contributions to the film industry.";
      } else if (question.includes("nawazuddin siddiqui")) {
        return "Nawazuddin Siddiqui is an Indian actor known for his versatile and impactful performances in Bollywood and international cinema. He has garnered acclaim for his roles in films like Gangs of Wasseypur and The Lunchbox.";
      } else if (question.includes("saoirse ronan")) {
        return "Saoirse Ronan is an Irish and American actress known for her talent and ability to portray complex characters. She has received several Academy Award nominations for her roles in films like Lady Bird and Brooklyn.";
      } else if (question.includes("idris elba")) {
        return "Idris Elba is a British actor, producer, and musician known for his roles in both film and television. He has appeared in projects such as Luther, Thor, and Mandela: Long Walk to Freedom.";
      } else if (question.includes("emma stone")) {
        return "Emma Stone is an American actress known for her charming and charismatic performances. She won an Academy Award for her role in La La Land and has been praised for her work in films like The Help and Birdman.";
      } else if (question.includes("robert downey jr.")) {
        return "Robert Downey Jr. is an American actor and producer known for his portrayal of Iron Man in the Marvel Cinematic Universe. He has had a successful career with roles in films like Sherlock Holmes and Chaplin.";
      } else if (question.includes("scarlett johansson")) {
        return "Scarlett Johansson is an American actress and singer known for her versatility and widespread acclaim. She has appeared in films such as Lost in Translation, Marriage Story, and the Marvel Cinematic Universe.";
      } else if (question.includes("dwayne johnson")) {
        return "Dwayne Johnson, also known as 'The Rock,' is an American actor, producer, and former professional wrestler. He has become a major Hollywood star with roles in films like Jumanji, Fast & Furious, and Moana.";
      } else if (question.includes("jennifer lawrence")) {
        return "Jennifer Lawrence is an American actress known for her down-to-earth personality and acclaimed performances. She won an Academy Award for her role in Silver Linings Playbook and has starred in The Hunger Games series.";
      } else if (question.includes("chris hemsworth")) {
        return "Chris Hemsworth is an Australian actor known for his portrayal of Thor in the Marvel Cinematic Universe. He has appeared in films like Snow White and the Huntsman, Rush, and Extraction.";
      } else if (question.includes("natalie portman")) {
        return "Natalie Portman is an American actress and filmmaker. She won an Academy Award for her role in Black Swan and has appeared in films such as V for Vendetta, Jackie, and the Star Wars prequel trilogy.";
      } else if (question.includes("will smith")) {
        return "Will Smith is an American actor, producer, and rapper. He gained fame for his roles in The Fresh Prince of Bel-Air and has starred in blockbuster films like Men in Black, Independence Day, and The Pursuit of Happyness.";
      } else if (question.includes("anne hathaway")) {
        return "Anne Hathaway is an American actress known for her versatility and charming performances. She has received critical acclaim for her roles in films like Les Misérables, The Devil Wears Prada, and The Dark Knight Rises.";
      } else if (question.includes("ryan reynolds")) {
        return "Ryan Reynolds is a Canadian actor and producer known for his comedic talent and charismatic presence. He has appeared in films like Deadpool, The Proposal, and Detective Pikachu.";
      } else if (question.includes("cate blanchett")) {
        return "Cate Blanchett is an Australian actress known for her powerful performances in a wide range of roles. She has received multiple awards, including two Academy Awards, for her contributions to the film industry.";
      } else if (question.includes("chadwick boseman")) {
        return "Chadwick Boseman was an American actor known for his impactful roles, including Black Panther in the Marvel Cinematic Universe. He received acclaim for his performances in films like 42 and Get On Up.";
      } else if (question.includes("emma watson")) {
        return "Emma Watson is a British actress, model, and activist. She gained fame for her role as Hermione Granger in the Harry Potter series and has since appeared in films like Beauty and the Beast and Little Women.";
      } else if (question.includes("jake gyllenhaal")) {
        return "Jake Gyllenhaal is an American actor known for his intense and compelling performances. He has appeared in films such as Brokeback Mountain, Nightcrawler, and Zodiac.";
      } else if (question.includes("cate blanchett")) {
        return "Cate Blanchett is an Australian actress known for her powerful performances in a wide range of roles. She has received multiple awards, including two Academy Awards, for her contributions to the film industry.";
      } else if (question.includes("margot robbie")) {
        return "Margot Robbie is an Australian actress and producer known for her dynamic performances. She gained acclaim for her roles in films like I, Tonya, Once Upon a Time in Hollywood, and Birds of Prey.";
      } else if (question.includes("anthony hopkins")) {
        return "Anthony Hopkins is a Welsh actor known for his legendary career and iconic roles. He won an Academy Award for his portrayal of Hannibal Lecter in The Silence of the Lambs and has appeared in numerous acclaimed films.";
      } else if (question.includes("emma stone")) {
        return "Emma Stone is an American actress known for her charming and charismatic performances. She won an Academy Award for her role in La La Land and has been praised for her work in films like The Help and Birdman.";
      } else if (question.includes("dame judi dench")) {
        return "Dame Judi Dench is an English actress known for her illustrious career in film, television, and theater. She has received numerous awards, including an Academy Award for her role in Shakespeare in Love.";
      } else if (question.includes("mark ruffalo")) {
        return "Mark Ruffalo is an American actor and producer known for his roles in films like The Avengers, Spotlight, and Foxcatcher. He is also an advocate for environmental causes and social justice.";
      } else if (question.includes("jessica chastain")) {
        return "Jessica Chastain is an American actress known for her powerful and versatile performances. She has received critical acclaim for her roles in films such as Zero Dark Thirty, The Help, and Molly's Game.";
      } else if (question.includes("daniel day-lewis")) {
        return "Daniel Day-Lewis is an English actor known for his method acting and exceptional performances. He has won three Academy Awards for his roles in My Left Foot, There Will Be Blood, and Lincoln.";
      } else if (question.includes("brie larson")) {
        return "Brie Larson is an American actress and filmmaker known for her diverse roles. She won an Academy Award for her performance in Room and has appeared in films like Captain Marvel and Short Term 12.";
      } else if (question.includes("kate winslet")) {
        return "Kate Winslet is an English actress known for her compelling performances and versatility. She has won an Academy Award for her role in The Reader and has starred in films like Titanic and Eternal Sunshine of the Spotless Mind.";
      } else if (question.includes("al pacino")) {
        return "Al Pacino is an American actor and filmmaker known for his intense and iconic performances. He has received acclaim for his roles in The Godfather series, Scarface, and Scent of a Woman.";
      } else if (question.includes("javier bardem")) {
        return "Javier Bardem is a Spanish actor known for his powerful and nuanced performances. He won an Academy Award for his role in No Country for Old Men and has appeared in films like Biutiful and Skyfall.";
      } else if (question.includes("matthew mcconaughey")) {
        return "Matthew McConaughey is an American actor known for his charismatic performances. He won an Academy Award for his role in Dallas Buyers Club and has appeared in films like Interstellar and The Wolf of Wall Street.";
      } else if (question.includes("shah rukh khan")) {
        return "Shah Rukh Khan, also known as the 'King of Bollywood,' is an Indian actor and film producer. He has appeared in numerous successful films, including Dilwale Dulhania Le Jayenge, My Name is Khan, and Chennai Express.";
      } else if (question.includes("aamir khan")) {
        return "Aamir Khan is an acclaimed Indian actor, filmmaker, and producer. Known for his dedication to diverse roles, he has starred in films like Lagaan, Dangal, and 3 Idiots.";
      } else if (question.includes("salman khan")) {
        return "Salman Khan, popularly known as 'Bhai' in the Bollywood industry, is an actor, producer, and television personality. He has delivered numerous blockbuster films, including Bajrangi Bhaijaan, Dabangg, and Sultan.";
      } else if (question.includes("deepika padukone")) {
        return "Deepika Padukone is an Indian actress and producer who has made a significant mark in Bollywood. She has appeared in successful films like Padmaavat, Chennai Express, and Piku.";
      } else if (question.includes("amitabh bachchan")) {
        return "Amitabh Bachchan, often referred to as the 'Shahenshah of Bollywood,' is an iconic actor in the Indian film industry. He has acted in legendary films like Sholay, Amar Akbar Anthony, and Kabhi Kabhie.";
      } else if (question.includes("priyanka chopra")) {
        return "Priyanka Chopra is an Indian actress, singer, and film producer who has gained international acclaim. She has starred in Bollywood hits such as Bajirao Mastani, Mary Kom, and Dil Dhadakne Do.";
      } else if (question.includes("ranbir kapoor")) {
        return "Ranbir Kapoor is a versatile Indian actor known for his performances in films like Rockstar, Barfi!, and Sanju. He belongs to the Kapoor film family and has established himself as a prominent actor in Bollywood.";
      } else if (question.includes("kareena kapoor khan")) {
        return "Kareena Kapoor Khan is a popular Bollywood actress who has been part of successful films like Kabhi Khushi Kabhie Gham, Jab We Met, and Udta Punjab. She is known for her versatile roles and style.";
      } else if (question.includes("hrithik roshan")) {
        return "Hrithik Roshan is an Indian actor and dancer known for his charismatic performances. He has appeared in films like Koi... Mil Gaya, Dhoom 2, and Super 30.";
      } else if (question.includes("aliabhatt")) {
        return "Alia Bhatt is a talented Indian actress and singer who has gained recognition for her performances in films like Highway, Raazi, and Gully Boy. She is known for her versatility and acting prowess.";
      } else if (question.includes("ajay devgn")) {
        return "Ajay Devgn is a versatile Indian actor known for his roles in action, comedy, and drama films. He has appeared in movies like Singham, Golmaal series, and Tanhaji: The Unsung Warrior.";
      } else if (question.includes("katrina kaif")) {
        return "Katrina Kaif is a British-Indian actress who has become a prominent figure in Bollywood. She has starred in successful films such as Ek Tha Tiger, Zindagi Na Milegi Dobara, and Dhoom 3.";
      } else if (question.includes("shahid kapoor")) {
        return "Shahid Kapoor is an Indian actor known for his versatile roles in films like Haider, Kabir Singh, and Udta Punjab. He has garnered praise for his performances in both commercial and critically acclaimed movies.";
      } else if (question.includes("akshay kumar")) {
        return "Akshay Kumar, often referred to as the 'Khiladi' of Bollywood, is an actor and producer known for his action and comedy films. He has appeared in movies like Hera Pheri, Toilet: Ek Prem Katha, and Kesari.";
      } else if (question.includes("anushka sharma")) {
        return "Anushka Sharma is an Indian actress and producer who has made a mark in Bollywood with films like Rab Ne Bana Di Jodi, Sultan, and PK. She is also known for her production ventures.";
      } else if (question.includes("ranveer singh")) {
        return "Ranveer Singh is a dynamic Indian actor known for his energetic performances. He has starred in films like Padmaavat, Gully Boy, and Bajirao Mastani, earning acclaim for his versatile roles.";
      } else if (question.includes("shraddha kapoor")) {
        return "Shraddha Kapoor is an Indian actress and singer who has gained popularity for her roles in films like Aashiqui 2, Stree, and Chhichhore. She is known for her versatility and on-screen presence.";
      } else if (question.includes("varun dhawan")) {
        return "Varun Dhawan is a young and talented Indian actor known for his performances in films like Badlapur, October, and Judwaa 2. He has established himself as one of the leading actors of the younger generation.";
      } else if (question.includes("ayushmann khurrana")) {
        return "Ayushmann Khurrana is a versatile Indian actor known for his unconventional film choices and impactful performances. He has starred in films like Andhadhun, Article 15, and Shubh Mangal Saavdhan.";
      } else if (question.includes("kangana ranaut")) {
        return "Kangana Ranaut is a fearless Indian actress known for her bold choices and powerful performances. She has appeared in films like Queen, Tanu Weds Manu series, and Panga.";
      } else if (question.includes("sidharth malhotra")) {
        return "Sidharth Malhotra is an Indian actor known for his roles in films like Student of the Year, Ek Villain, and Marjaavaan. He has gained popularity for his good looks and on-screen presence.";
      } else if (question.includes("kriti sanon")) {
        return "Kriti Sanon is an Indian actress known for her work in Hindi films. She has appeared in movies like Bareilly Ki Barfi, Luka Chuppi, and Dilwale.";
      } else if (question.includes("tiger shroff")) {
        return "Tiger Shroff is an Indian actor and martial artist known for his action-packed roles in films like Baaghi, Heropanti, and War. He is also a skilled dancer.";
      } else if (question.includes("dishapatani")) {
        return "Disha Patani is an Indian actress known for her work in Bollywood and the Telugu film industry. She has appeared in movies like MS Dhoni: The Untold Story, Baaghi 2, and Malang.";
      } else if (question.includes("vicky kaushal")) {
        return "Vicky Kaushal is an Indian actor known for his critically acclaimed performances in films like Masaan, Uri: The Surgical Strike, and Raazi. He has received several awards for his outstanding work.";
      } else if (question.includes("sushant singh rajput")) {
        return "Sushant Singh Rajput was a talented Indian actor known for his work in films like Kai Po Che!, MS Dhoni: The Untold Story, and Chhichhore. He left a lasting impact on Bollywood.";
      } else if (question.includes("tapsee pannu")) {
        return "Taapsee Pannu is an Indian actress known for her versatile roles in films like Pink, Badla, and Thappad. She has received acclaim for her strong and impactful performances.";
      } else if (question.includes("fawad khan")) {
        return "Fawad Khan is a Pakistani actor, singer, and model known for his charm and versatile performances. He gained fame with TV dramas like 'Zindagi Gulzar Hai' and has appeared in Bollywood films such as 'Khoobsurat' and 'Ae Dil Hai Mushkil.'";
      } else if (question.includes("mahira khan")) {
        return "Mahira Khan is a renowned Pakistani actress and model. She gained widespread recognition for her role in the TV drama 'Humsafar' and made her Bollywood debut opposite Shah Rukh Khan in 'Raees.'";
      } else if (question.includes("adnan malik")) {
        return "Adnan Malik is a Pakistani actor, director, and producer. He has been a part of notable TV dramas like 'Dil Banjaara' and 'Sadqay Tumhare.' Adnan is known for his compelling performances.";
      } else if (question.includes("sajal aly")) {
        return "Sajal Aly is a talented Pakistani actress known for her work in TV dramas such as 'Yakeen Ka Safar' and 'Alif.' She has received acclaim for her versatile roles and strong on-screen presence.";
      } else if (question.includes("bilal abbas khan")) {
        return "Bilal Abbas Khan is a Pakistani actor known for his performances in TV dramas like 'O Rangreza' and 'Cheekh.' He has earned praise for his ability to portray diverse characters.";
      } else if (question.includes("maya ali")) {
        return "Maya Ali is a popular Pakistani actress known for her roles in TV dramas like 'Mann Mayal' and 'Diyar-e-Dil.' She is also recognized for her work in Pakistani films such as 'Teefa in Trouble.'";
      } else if (question.includes("imran abbas")) {
        return "Imran Abbas is a versatile Pakistani actor and model. He has appeared in TV dramas like 'Khuda Aur Muhabbat' and Pakistani films such as 'Anjuman.' Imran is known for his good looks and acting skills.";
      } else if (question.includes("saba qamar")) {
        return "Saba Qamar is an acclaimed Pakistani actress known for her exceptional acting skills. She has appeared in TV dramas like 'Baaghi' and Pakistani films such as 'Hindi Medium,' earning international recognition.";
      } else if (question.includes("humayun saeed")) {
        return "Humayun Saeed is a prominent Pakistani actor, producer, and television host. He has been a part of successful TV dramas like 'Meray Paas Tum Ho' and films such as 'Jawani Phir Nahi Ani.'";
      } else if (question.includes("sami khan")) {
        return "Sami Khan is a Pakistani actor known for his work in TV dramas like 'Dil-e-Muztar' and films such as 'Wrong No.' He has received awards for his contributions to the entertainment industry.";
      } else if (question.includes("mehwish hayat")) {
        return "Mehwish Hayat is a versatile Pakistani actress and singer. She has appeared in TV dramas like 'Dil Lagi' and Pakistani films such as 'Load Wedding' and 'Punjab Nahi Jaungi.'";
      } else if (question.includes("danish taimoor")) {
        return "Danish Taimoor is a Pakistani actor and model. He has been a part of TV dramas like 'Meri Zaat Zarra-e-Benishan' and films such as 'Jalaibee' and 'Wrong No.' Danish is known for his charming on-screen presence.";
      } else if (question.includes("sana javed")) {
        return "Sana Javed is a talented Pakistani actress known for her roles in TV dramas like 'Khaani' and 'Romeo Weds Heer.' She has received acclaim for her performances in both serious and comedic roles.";
      } else if (question.includes("ahad raza mir")) {
        return "Ahad Raza Mir is a Pakistani actor and singer. He gained popularity for his role in the TV drama 'Yakeen Ka Safar' and has since been part of projects like 'Ehd-e-Wafa' and 'Parwaaz Hai Junoon.'";
      } else if (question.includes("mawra hocane")) {
        return "Mawra Hocane is a Pakistani actress and model. She has appeared in TV dramas like 'Sammi' and 'Aangan' and made her Bollywood debut with the film 'Sanam Teri Kasam.'";
      } else if (question.includes("alizeh shah")) {
        return "Alizeh Shah is a young and emerging Pakistani actress known for her work in TV dramas like 'Ehd-e-Wafa' and 'Mera Dil Mera Dushman.' She has quickly gained popularity for her on-screen talent.";
      } else if (question.includes("farhan saeed")) {
        return "Farhan Saeed is a Pakistani singer, actor, and songwriter. He has been part of TV dramas like 'Udaari' and is known for his contributions to the Pakistani music industry.";
      } else if (question.includes("iqra aziz")) {
        return "Iqra Aziz is a popular Pakistani actress and model. She has appeared in TV dramas like 'Suno Chanda' and 'Ranjha Ranjha Kardi,' earning praise for her acting skills and screen presence.";
      } else if (question.includes("asim azhar")) {
        return "Asim Azhar is a Pakistani singer, actor, and songwriter. He has contributed to the music industry with hits like 'Tera Woh Pyar' and has been part of TV dramas like 'Tum Tum.'";
      } else if (question.includes("ushna shah")) {
        return "Ushna Shah is a Pakistani actress known for her work in TV dramas like 'Bashar Momin' and 'Alif Allah Aur Insaan.' She is recognized for her versatile roles and powerful performances.";
      } else if (question.includes("bilal ashraf")) {
        return "Bilal Ashraf is a Pakistani actor and model known for his work in films like 'Janaan' and 'Superstar.' He has gained recognition for his performances and has contributed to the revival of Pakistani cinema.";
      } else if (question.includes("sarah khan")) {
        return "Sarah Khan is a Pakistani actress known for her work in TV dramas like 'Sabaat' and 'Belapur Ki Dayan.' She has established herself as a prominent face in the Pakistani entertainment industry.";
      } else if (question.includes("ahmed ali akbar")) {
        return "Ahmed Ali Akbar is a Pakistani actor and singer known for his work in films like 'Laal Kabootar' and 'Parey Hut Love.' He has received acclaim for his performances in various projects.";
      } else if (question.includes("sajal aly")) {
        return "Sajal Aly is a talented Pakistani actress known for her work in TV dramas such as 'Yakeen Ka Safar' and 'Alif.' She has received acclaim for her versatile roles and strong on-screen presence.";
      } else if (question.includes("adnan malik")) {
        return "Adnan Malik is a Pakistani actor, director, and producer. He has been a part of notable TV dramas like 'Dil Banjaara' and 'Sadqay Tumhare.' Adnan is known for his compelling performances.";
      } else if (question.includes("maya ali")) {
        return "Maya Ali is a popular Pakistani actress known for her roles in TV dramas like 'Mann Mayal' and 'Diyar-e-Dil.' She is also recognized for her work in Pakistani films such as 'Teefa in Trouble.'";
      } else if (question.includes("imran abbas")) {
        return "Imran Abbas is a versatile Pakistani actor and model. He has appeared in TV dramas like 'Khuda Aur Muhabbat' and Pakistani films such as 'Anjuman.' Imran is known for his good looks and acting skills.";
      } else if (question.includes("saba qamar")) {
        return "Saba Qamar is an acclaimed Pakistani actress known for her exceptional acting skills. She has appeared in TV dramas like 'Baaghi' and Pakistani films such as 'Hindi Medium,' earning international recognition.";
      } else if (question.includes("humayun saeed")) {
        return "Humayun Saeed is a prominent Pakistani actor, producer, and television host. He has been a part of successful TV dramas like 'Meray Paas Tum Ho' and films such as 'Jawani Phir Nahi Ani.'";
      } else if (question.includes("lionel messi")) {
        return "Lionel Messi is an Argentine professional footballer widely regarded as one of the greatest players of all time. He has spent the majority of his career with FC Barcelona, winning numerous individual awards and leading his team to numerous titles.";
      } else if (question.includes("cristiano ronaldo")) {
        return "Cristiano Ronaldo is a Portuguese professional footballer considered one of the greatest goal scorers in the history of the sport. He has played for top clubs like Manchester United, Real Madrid, and Juventus, achieving success at both the team and individual levels.";
      } else if (question.includes("neymar")) {
        return "Neymar Jr. is a Brazilian forward known for his skill, flair, and goal-scoring ability. He has played for clubs like Barcelona and Paris Saint-Germain (PSG) and is known for his success with the Brazilian national team.";
      } else if (question.includes("kylian mbappe")) {
        return "Kylian Mbappe is a French forward known for his speed and goal-scoring prowess. He has achieved success with Paris Saint-Germain (PSG) and the French national team, winning domestic league titles and the FIFA World Cup.";
      } else if (question.includes("sergio ramos")) {
        return "Sergio Ramos is a Spanish defender known for his leadership and defensive skills. He has had a successful career with Real Madrid, winning numerous La Liga and UEFA Champions League titles.";
      } else if (question.includes("virgil van dijk")) {
        return "Virgil van Dijk is a Dutch center-back known for his strength and defensive abilities. He has played a key role in Liverpool's success, helping them win the Premier League and the UEFA Champions League.";
      } else if (question.includes("kevin de bruyne")) {
        return "Kevin De Bruyne is a Belgian midfielder known for his vision, passing, and goal-scoring ability. He plays for Manchester City in the English Premier League and has been a key player for both club and country.";
      } else if (question.includes("robert lewandowski")) {
        return "Robert Lewandowski is a Polish striker known for his goal-scoring prowess. He plays for Bayern Munich in the Bundesliga and has set records for his goal-scoring achievements, including a remarkable performance in the UEFA Champions League.";
      } else if (question.includes("luka modric")) {
        return "Luka Modric is a Croatian midfielder known for his technical skills and playmaking abilities. He has had a successful career with Real Madrid, winning multiple UEFA Champions League titles and leading Croatia to the World Cup final.";
      } else if (question.includes("mohamed salah")) {
        return "Mohamed Salah is an Egyptian forward known for his speed and goal-scoring ability. He plays for Liverpool in the English Premier League and has been a crucial part of the team's success.";
      } else if (question.includes("harry kane")) {
        return "Harry Kane is an English striker known for his goal-scoring prowess and leadership. He plays for Tottenham Hotspur in the English Premier League and has been a consistent performer for both club and country.";
      } else if (question.includes("ngolo kante")) {
        return "N'Golo Kanté is a French midfielder known for his tireless work rate and ball-winning ability. He has played a crucial role in the success of both Leicester City and Chelsea, winning Premier League titles with both clubs.";
      } else if (question.includes("raheem sterling")) {
        return "Raheem Sterling is an English forward known for his pace and goal-scoring ability. He plays for Manchester City in the English Premier League and has been a key player in the team's domestic and international success.";
      } else if (question.includes("thiago alcantara")) {
        return "Thiago Alcántara is a Spanish midfielder known for his technical skills and passing ability. He has played for top clubs like Barcelona, Bayern Munich, and Liverpool, winning domestic and international honors.";
      } else if (question.includes("karim benzema")) {
        return "Karim Benzema is a French striker known for his goal-scoring prowess and link-up play. He has had a successful career with Real Madrid, contributing to their numerous La Liga and UEFA Champions League titles.";
      } else if (question.includes("jordan henderson")) {
        return "Jordan Henderson is an English midfielder and captain of Liverpool. Known for his leadership and work ethic, he played a pivotal role in Liverpool's recent successes, including winning the Premier League and the UEFA Champions League.";
      } else if (question.includes("jamie vardy")) {
        return "Jamie Vardy is an English striker known for his goal-scoring exploits. He plays for Leicester City in the English Premier League and played a crucial role in their historic title-winning season.";
      } else if (question.includes("son heung-min")) {
        return "Son Heung-min is a South Korean forward known for his speed and goal-scoring ability. He plays for Tottenham Hotspur in the English Premier League and has been a key player for both club and country.";
      } else if (question.includes("marcus rashford")) {
        return "Marcus Rashford is an English forward known for his pace and versatility. He plays for Manchester United in the English Premier League and has been a key figure in their attacking setup.";
      } else if (question.includes("thibaut courtois")) {
        return "Thibaut Courtois is a Belgian goalkeeper known for his shot-stopping ability and commanding presence. He plays for Real Madrid in La Liga and has been one of the top goalkeepers in the world.";
      } else if (question.includes("virat kohli")) {
        return "Virat Kohli is an Indian cricketer and one of the finest batsmen in the world. He is the captain of the Indian cricket team in all formats and has achieved numerous records and accolades throughout his career.";
      } else if (question.includes("steve smith")) {
        return "Steve Smith is an Australian cricketer known for his exceptional batting skills. He has been a key player in the Australian cricket team, often leading with his consistent performances across formats.";
      } else if (question.includes("kane williamson")) {
        return "Kane Williamson is a New Zealand cricketer and captain of the New Zealand national cricket team. Known for his elegant batting and leadership qualities, he has played a pivotal role in New Zealand's success.";
      } else if (question.includes("joe root")) {
        return "Joe Root is an English cricketer and the captain of the England cricket team. He is a prolific batsman and has been a consistent performer for England in all formats of the game.";
      } else if (question.includes("rohit sharma")) {
        return "Rohit Sharma is an Indian cricketer known for his explosive batting at the top of the order. He holds the record for the highest individual score in One Day Internationals (ODIs) with 264 runs.";
      } else if (question.includes("babar azam")) {
        return "Babar Azam is a Pakistani cricketer and the captain of the Pakistan national cricket team. He is known for his stylish batting and has emerged as one of the top batsmen in international cricket.";
      } else if (question.includes("quinton de kock")) {
        return "Quinton de Kock is a South African cricketer known for his aggressive batting and wicketkeeping skills. He has been a key player for South Africa in all formats of the game.";
      } else if (question.includes("david warner")) {
        return "David Warner is an Australian cricketer known for his dynamic batting at the top of the order. He has been a prolific run-scorer for Australia in Test and limited-overs cricket.";
      } else if (question.includes("shakib al hasan")) {
        return "Shakib Al Hasan is a Bangladeshi cricketer known for his all-round abilities, contributing with both bat and ball. He is considered one of the greatest cricketers in Bangladesh's history.";
      } else if (question.includes("jason holder")) {
        return "Jason Holder is a West Indian cricketer and captain of the West Indies cricket team. He is known for his effective pace bowling and has led the West Indies team with distinction.";
      } else if (question.includes("kagiso rabada")) {
        return "Kagiso Rabada is a South African fast bowler known for his pace and ability to take wickets. He has been a key bowler for South Africa in Test and limited-overs cricket.";
      } else if (question.includes("mitchell starc")) {
        return "Mitchell Starc is an Australian fast bowler known for his left-arm pace and ability to swing the ball. He has been a key bowler for Australia in all formats of the game.";
      } else if (question.includes("ben stokes")) {
        return "Ben Stokes is an English cricketer known for his all-round skills, contributing with both bat and ball. He played a pivotal role in England's success, including their 2019 Cricket World Cup victory.";
      } else if (question.includes("jasprit bumrah")) {
        return "Jasprit Bumrah is an Indian fast bowler known for his unique bowling action and accuracy. He has become one of the leading pace bowlers for India in all formats of the game.";
      } else if (question.includes("ross taylor")) {
        return "Ross Taylor is a New Zealand cricketer known for his experience and reliable batting. He has been a key player for New Zealand in all formats and has set several records.";
      } else if (question.includes("marnus labuschagne")) {
        return "Marnus Labuschagne is an Australian cricketer known for his solid batting in Test cricket. He has quickly risen to prominence and established himself as a key player in the Australian team.";
      } else if (question.includes("mohammad amir")) {
        return "Mohammad Amir is a Pakistani fast bowler known for his swing and pace. He played a crucial role in Pakistan's 2009 T20 World Cup victory and has been a key bowler for the team.";
      } else if (question.includes("pat cummins")) {
        return "Pat Cummins is an Australian fast bowler known for his express pace and ability to generate bounce. He has been a crucial part of the Australian bowling attack in all formats.";
      } else if (question.includes("moeen ali")) {
        return "Moeen Ali is an English all-rounder known for his batting and off-spin bowling. He has been a valuable asset to the England cricket team in Test and limited-overs cricket.";
      } else if (question.includes("rashid khan")) {
        return "Rashid Khan is an Afghan leg-spin bowler known for his exceptional skills. He has been a sensation in T20 cricket and has played in various T20 leagues around the world.";
      } else if (question.includes("hardik pandya")) {
        return "Hardik Pandya is an Indian all-rounder known for his aggressive batting and effective seam bowling. He has become a key player for India in limited-overs cricket.";
      } else if (question.includes("jofra archer")) {
        return "Jofra Archer is an English fast bowler known for his express pace and ability to trouble batsmen. He played a crucial role in England's 2019 Cricket World Cup victory.";
      } else if (question.includes("shan masood")) {
        return "Shan Masood is a Pakistani cricketer known for his opening batting. He gained recognition for his performances in Test cricket, including a century against England in 2020.";
      } else if (question.includes("chris gayle")) {
        return "Chris Gayle is a West Indian cricketer known for his explosive batting and power-hitting. He has been a dominant force in T20 cricket and has set numerous records.";
      } else if (question.includes("afghanistan cricket team")) {
        return "The Afghanistan cricket team is a rising force in international cricket. Known for their spin bowling talent, they have made significant strides in various formats of the game.";
      } else if (question.includes("sophie devine")) {
        return "Sophie Devine is a New Zealand cricketer and captain of the New Zealand women's cricket team. She is known for her aggressive batting and effective pace bowling.";
      } else if (question.includes("ellyse perry")) {
        return "Ellyse Perry is an Australian all-rounder and one of the best female cricketers in the world. She is known for her all-round skills, contributing with both bat and ball.";
      } else if (question.includes("babar azam")) {
        return "Babar Azam is a Pakistani cricketer and the captain of the Pakistan national cricket team. Known for his stylish batting, he has emerged as one of the top batsmen in international cricket.";
      } else if (question.includes("mohammad amir")) {
        return "Mohammad Amir is a Pakistani fast bowler known for his swing and pace. He played a crucial role in Pakistan's 2009 T20 World Cup victory and has been a key bowler for the team.";
      } else if (question.includes("shaheen afridi")) {
        return "Shaheen Afridi is a talented Pakistani fast bowler known for his left-arm pace and ability to take wickets. He has played a key role in Pakistan's bowling attack across formats.";
      } else if (question.includes("shadab khan")) {
        return "Shadab Khan is a Pakistani leg-spin bowler and all-rounder. He is known for his effective spin bowling and has contributed with the bat in limited-overs cricket.";
      } else if (question.includes("fakhar zaman")) {
        return "Fakhar Zaman is a Pakistani opening batsman known for his aggressive style of play. He gained international recognition for his century in the final of the 2017 ICC Champions Trophy.";
      } else if (question.includes("imam-ul-haq")) {
        return "Imam-ul-Haq is a Pakistani opening batsman known for his solid technique. He has been a consistent performer for Pakistan in limited-overs cricket.";
      } else if (question.includes("asif ali")) {
        return "Asif Ali is a Pakistani cricketer known for his aggressive batting. He has been a part of Pakistan's T20I squad and is known for his power-hitting ability.";
      } else if (question.includes("haris sohail")) {
        return "Haris Sohail is a Pakistani batsman known for his elegant strokeplay. He has been a part of Pakistan's middle-order and has played crucial innings in various formats.";
      } else if (question.includes("mohammad rizwan")) {
        return "Mohammad Rizwan is a Pakistani wicketkeeper-batsman known for his consistent performances. He has been a key player for Pakistan in all formats of the game.";
      } else if (question.includes("yasir shah")) {
        return "Yasir Shah is a Pakistani leg-spin bowler known for his wicket-taking abilities. He has been a crucial part of Pakistan's Test bowling attack.";
      } else if (question.includes("abid ali")) {
        return "Abid Ali is a Pakistani opening batsman known for his solid technique. He has been a part of Pakistan's Test and ODI squads.";
      } else if (question.includes("azhar ali")) {
        return "Azhar Ali is a Pakistani cricketer and former captain of the Pakistan Test team. He is known for his leadership and contributions as a top-order batsman.";
      } else if (question.includes("mohammad nawaz")) {
        return "Mohammad Nawaz is a Pakistani all-rounder known for his left-arm spin bowling and aggressive batting. He has been part of Pakistan's T20I and ODI squads.";
      } else if (question.includes("haider ali")) {
        return "Haider Ali is a young Pakistani cricketer known for his aggressive batting. He has represented Pakistan in T20Is and has shown promise for the future.";
      } else if (question.includes("sarfaraz ahmed")) {
        return "Sarfaraz Ahmed is a Pakistani wicketkeeper-batsman and former captain of the national team. He led Pakistan to victory in the 2017 ICC Champions Trophy.";
      } else if (question.includes("shoaib malik")) {
        return "Shoaib Malik is a veteran Pakistani cricketer known for his all-round skills. He has been a part of the national team for many years, contributing with both bat and ball.";
      } else if (question.includes("hasan ali")) {
        return "Hasan Ali is a Pakistani fast bowler known for his pace and ability to take wickets. He played a key role in Pakistan's success in the 2017 ICC Champions Trophy.";
      } else if (question.includes("faheem ashraf")) {
        return "Faheem Ashraf is a Pakistani all-rounder known for his medium-fast bowling and aggressive batting. He has been part of Pakistan's limited-overs squads.";
      } else if (question.includes("usman qadir")) {
        return "Usman Qadir is a Pakistani leg-spin bowler known for his variations. He is the son of the legendary leg-spinner Abdul Qadir and has carried on the family legacy.";
      } else if (question.includes("fahim ashraf")) {
        return "Fahim Ashraf is a Pakistani all-rounder known for his medium-fast bowling and hard-hitting with the bat. He has represented Pakistan in various formats.";
      } else if (question.includes("mohammad hasnain")) {
        return "Mohammad Hasnain is a Pakistani fast bowler known for his express pace. He has represented Pakistan in T20Is and ODIs, making a mark with his bowling.";
      } else if (question.includes("imad wasim")) {
        return "Imad Wasim is a Pakistani all-rounder known for his left-arm spin bowling and handy batting. He has been a consistent performer in the limited-overs formats.";
      } else if (question.includes("sharjeel khan")) {
        return "Sharjeel Khan is a Pakistani left-handed batsman known for his aggressive style of play. He has represented Pakistan in T20Is and ODIs.";
      } else if (question.includes("imran khan")) {
        return "Imran Khan is a Pakistani fast bowler known for his exploits in the 1970s and 1980s. He played a key role in Pakistan's historic 1992 Cricket World Cup victory.";
      } else if (question.includes("mohammad irfan")) {
        return "Mohammad Irfan is a Pakistani fast bowler known for his height and pace. He has been part of Pakistan's bowling lineup in various formats.";
      } else if (question.includes("umar akmal")) {
        return "Umar Akmal is a Pakistani cricketer known for his aggressive batting. He has represented Pakistan in all formats but has faced disciplinary issues.";
      } else if (question.includes("mohammad hafeez")) {
        return "Mohammad Hafeez is a veteran Pakistani all-rounder known for his off-spin bowling and consistent batting. He has been a key player for Pakistan in all formats.";
      } else if (question.includes("kamran akmal")) {
        return "Kamran Akmal is a Pakistani wicketkeeper-batsman known for his aggressive batting style. He has represented Pakistan in all formats and has been part of domestic T20 leagues.";
      } else if (question.includes("rumman raees")) {
        return "Rumman Raees is a Pakistani left-arm fast bowler known for his swing bowling. He has represented Pakistan in limited-overs cricket.";
      } else if (question.includes("software development")) {
        return "Software development is the process of designing, coding, testing, and maintaining software applications. It involves a systematic approach to building software to meet specific needs or solve particular problems.";
      } else if (question.includes("programming languages")) {
        return "Programming languages are formal languages used to instruct computers. Examples include Java, Python, C++, and JavaScript. Each language has its strengths and is suited to different types of development tasks.";
      } else if (question.includes("web development")) {
        return "Web development refers to building and maintaining websites and web applications. It involves front-end development (user interface) and back-end development (server-side logic, databases).";
      } else if (question.includes("artificial intelligence")) {
        return "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It involves creating algorithms that enable machines to perform tasks that typically require human intelligence, such as speech recognition or decision-making.";
      } else if (question.includes("machine learning")) {
        return "Machine Learning is a subset of AI that focuses on developing algorithms that allow computers to learn from data. It is used in various applications, including predictive analytics, image recognition, and natural language processing.";
      } else if (question.includes("data science")) {
        return "Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract insights and knowledge from structured and unstructured data. It involves statistics, machine learning, and data analysis.";
      } else if (question.includes("cloud computing")) {
        return "Cloud Computing is the delivery of computing services, including storage, processing power, and software, over the internet. It provides scalable and flexible resources, allowing businesses to access and use computing services without the need for physical infrastructure.";
      } else if (question.includes("agile methodology")) {
        return "Agile methodology is an iterative and incremental approach to software development. It emphasizes flexibility, collaboration, and customer feedback. Agile development is well-suited for projects where requirements may change frequently.";
      } else if (question.includes("version control")) {
        return "Version control is a system that records changes to a file or set of files over time. It allows multiple developers to collaborate on a project without overwriting each other's work. Git is a popular version control system.";
      } else if (question.includes("devops")) {
        return "DevOps is a set of practices that combine software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and deliver high-quality software continuously. Automation, collaboration, and monitoring are key components of DevOps.";
      } else if (question.includes("cybersecurity")) {
        return "Cybersecurity involves protecting computer systems, networks, and programs from digital attacks. It includes measures to prevent unauthorized access, data breaches, and other cyber threats.";
      } else if (question.includes("software architecture")) {
        return "Software architecture refers to the high-level structure of a software system. It involves making decisions on how the system will be built, including the design of components, data flow, and communication between different parts of the application.";
      } else if (question.includes("agile scrum")) {
        return "Agile Scrum is an iterative and incremental framework for managing complex knowledge work. It is often used for software development projects and includes roles like Scrum Master, Product Owner, and Development Team.";
      } else if (question.includes("frontend development")) {
        return "Frontend development involves creating the user interface and user experience of a website or web application. It includes working with HTML, CSS, and JavaScript to design and implement the visual aspects of the software.";
      } else if (question.includes("backend development")) {
        return "Backend development focuses on server-side logic and databases. It involves writing code that runs on the server, processes requests from the frontend, and interacts with databases to retrieve or store data.";
      } else if (question.includes("mobile app development")) {
        return "Mobile app development is the process of creating software applications for mobile devices. It includes developing for platforms like iOS (Apple) and Android, using programming languages such as Swift, Objective-C, or Kotlin.";
      } else if (question.includes("notable software developers")) {
        return "Notable software developers include individuals who have made significant contributions to the field. Some examples include Linus Torvalds (Linux), Bill Gates (Microsoft), Mark Zuckerberg (Facebook), and Ada Lovelace (considered the first computer programmer).";
      } else if (question.includes("open-source software")) {
        return "Open-source software is software with a source code that anyone can inspect, modify, and enhance. Examples include the Linux operating system, the Apache web server, and the Mozilla Firefox web browser.";
      } else if (question.includes("coding bootcamps")) {
        return "Coding bootcamps are intensive, short-term training programs that teach programming skills. They are designed to quickly prepare individuals for careers in software development and typically focus on practical, hands-on learning.";
      } else if (question.includes("full-stack development")) {
        return "Full-stack development involves working on both the frontend and backend of a software application. Full-stack developers have skills in areas such as HTML, CSS, JavaScript, server-side programming, and database management.";
      } else if (question.includes("agile principles")) {
        return "Agile principles are a set of values and practices outlined in the Agile Manifesto. They emphasize individuals and interactions, working software, customer collaboration, and responding to change. Agile principles guide agile methodologies like Scrum and Kanban.";
      } else if (question.includes("software testing")) {
        return "Software testing is the process of evaluating a software application to find defects and ensure that it meets specified requirements. Testing can be manual or automated and is crucial for delivering high-quality software.";
      } else if (question.includes("user experience (ux) design")) {
        return "User Experience (UX) design focuses on enhancing user satisfaction by improving the usability and accessibility of a product. It involves understanding user needs, creating wireframes, and designing interfaces to deliver a positive user experience.";
      } else if (question.includes("internet of things (iot)")) {
        return "The Internet of Things (IoT) refers to the network of interconnected devices that communicate and exchange data. IoT enables devices like smart thermostats, wearables, and industrial sensors to connect to the internet and share information.";
      } else if (question.includes("blockchain technology")) {
        return "Blockchain technology is a decentralized and distributed ledger that records transactions across multiple computers. It is the underlying technology for cryptocurrencies like Bitcoin and has applications in secure and transparent record-keeping.";
      } else if (question.includes("software development life cycle (sdlc)")) {
        return "The Software Development Life Cycle (SDLC) is a process for planning, creating, testing, deploying, and maintaining software. It includes phases such as requirements gathering, design, implementation, testing, deployment, and maintenance.";
      } else if (question.includes("docker containers")) {
        return "Docker containers are lightweight, portable, and self-sufficient units that can run applications and their dependencies. They provide a consistent environment across different environments, making it easier to deploy and scale applications.";
      } else if (question.includes("continuous integration/continuous deployment (ci/cd)")) {
        return "Continuous Integration (CI) and Continuous Deployment (CD) are practices in software development that involve automatically testing and deploying code changes. They aim to improve the development process by ensuring that changes are tested and deployed quickly and reliably.";
      } else if (question.includes("agile ceremonies")) {
        return "Agile ceremonies are regular, scheduled events in agile development processes. Examples include Sprint Planning, Daily Standup, Sprint Review, and Sprint Retrospective. These ceremonies help teams collaborate, plan, and continuously improve their processes.";
      } else if (question.includes("software development trends")) {
        return "Software development trends are evolving patterns and practices in the industry. Current trends include low-code/no-code development, artificial intelligence and machine learning integration, serverless architecture, and increased emphasis on cybersecurity.";
      } else if (question.includes("mark zuckerberg")) {
        return "Mark Zuckerberg is the co-founder and CEO of Facebook, the world's largest social media platform. He played a crucial role in the creation and development of Facebook, which was launched in 2004.";
      } else if (question.includes("bill gates")) {
        return "Bill Gates is the co-founder of Microsoft Corporation, a leading technology company. He played a key role in the development of the personal computer revolution, and Microsoft's Windows operating system became widely used worldwide.";
      } else if (question.includes("steve jobs")) {
        return "Steve Jobs was the co-founder of Apple Inc., a company known for its innovative products, including the iPhone, iPad, and Macintosh computer. Jobs played a pivotal role in shaping the consumer electronics industry.";
      } else if (question.includes("elon musk")) {
        return "Elon Musk is a tech entrepreneur and CEO known for founding companies like Tesla, SpaceX, and Neuralink. Musk has been instrumental in advancing electric vehicles, space exploration, and neural technology.";
      } else if (question.includes("jeff bezos")) {
        return "Jeff Bezos is the founder of Amazon, one of the world's largest e-commerce and cloud computing companies. Bezos played a significant role in revolutionizing online shopping and digital content delivery.";
      } else if (question.includes("sundar pichai")) {
        return "Sundar Pichai is the CEO of Alphabet Inc., Google's parent company. He played a key role in the development of Google products, including the Chrome browser and the Android operating system.";
      } else if (question.includes("tim berners-lee")) {
        return "Tim Berners-Lee is a computer scientist and the inventor of the World Wide Web. He created the first web browser, server, and web pages, laying the foundation for the modern internet.";
      } else if (question.includes("linus torvalds")) {
        return "Linus Torvalds is a software engineer and the creator of the Linux operating system kernel. Linux has become a widely used open-source platform, particularly in server environments.";
      } else if (question.includes("mark andreesen")) {
        return "Marc Andreessen is a software engineer and entrepreneur who co-authored Mosaic, the first widely used web browser. He played a significant role in the early development of the internet.";
      } else if (question.includes("larry page")) {
        return "Larry Page is a computer scientist and co-founder of Google. He played a pivotal role in the development of the Google search engine and the expansion of Google's products and services.";
      } else if (question.includes("sergey brin")) {
        return "Sergey Brin is a computer scientist and co-founder of Google. Brin worked alongside Larry Page to create Google, revolutionizing the way people access and organize information online.";
      } else if (question.includes("ada lovelace")) {
        return "Ada Lovelace is considered the world's first computer programmer. In the 19th century, she wrote the first algorithm intended for implementation on Charles Babbage's Analytical Engine, a theoretical early mechanical computer.";
      } else if (question.includes("alan turing")) {
        return "Alan Turing was a mathematician, logician, and computer scientist known for his work in breaking German codes during World War II. He is considered one of the fathers of theoretical computer science.";
      } else if (question.includes("grace hopper")) {
        return "Grace Hopper was a computer scientist and U.S. Navy rear admiral. She played a crucial role in the development of early computers and programming languages, including the development of COBOL.";
      } else if (question.includes("nikola tesla")) {
        return "Nikola Tesla was a Serbian-American inventor and engineer known for his contributions to the development of alternating current (AC) electrical systems and numerous inventions related to electromagnetism.";
      } else if (question.includes("thomas edison")) {
        return "Thomas Edison was an American inventor and businessman known for his contributions to the development of the electric light bulb, phonograph, and motion picture camera.";
      } else if (question.includes("adafruit")) {
        return "Adafruit Industries is an open-source hardware company founded by Limor Fried, known as Ladyada. Adafruit focuses on designing and selling electronics kits, components, and accessories.";
      } else if (question.includes("rasmus lerdorf")) {
        return "Rasmus Lerdorf is a Danish-Canadian programmer who created the PHP scripting language. PHP is widely used for web development and server-side scripting.";
      } else if (question.includes("hedy lamarr")) {
        return "Hedy Lamarr was an Austrian-American actress and inventor. She co-invented an early form of frequency-hopping spread spectrum communication, a technology that laid the foundation for modern wireless communication.";
      } else if (question.includes("jonathan ive")) {
        return "Jonathan Ive, often known as Jony Ive, is a British industrial designer who played a key role in the design of iconic Apple products, including the iPhone, iPod, and MacBook.";
      } else if (question.includes("adafruit")) {
        return "Adafruit Industries is an open-source hardware company founded by Limor Fried, known as Ladyada. Adafruit focuses on designing and selling electronics kits, components, and accessories.";
      } else if (question.includes("brendan eich")) {
        return "Brendan Eich is a computer programmer and the creator of the JavaScript programming language. JavaScript is a key technology for web development and is widely used in building interactive websites.";
      } else if (question.includes("yukihiro matsumoto")) {
        return "Yukihiro Matsumoto, also known as Matz, is a Japanese computer scientist and the creator of the Ruby programming language. Ruby is known for its simplicity and productivity.";
      } else if (question.includes("james gosling")) {
        return "James Gosling is a Canadian computer scientist known as the father of the Java programming language. Java has been widely used in enterprise applications and web development.";
      } else if (question.includes("shantanu narayen")) {
        return "Shantanu Narayen is the CEO of Adobe Inc., a software company known for products like Photoshop, Illustrator, and Acrobat. Narayen has played a key role in Adobe's transformation to a cloud-based subscription model.";
      } else if (question.includes("paul graham")) {
        return "Paul Graham is a computer scientist, entrepreneur, and co-founder of Y Combinator, a startup accelerator. He is also known for his essays on programming, entrepreneurship, and venture capital.";
      } else if (question.includes("vinton cerf")) {
        return "Vinton Cerf is a computer scientist and one of the pioneers of the internet. He co-designed the TCP/IP protocols and is often referred to as one of the 'Fathers of the Internet.'";
      } else if (question.includes("justin trudeau")) {
        return "Justin Trudeau is the Prime Minister of Canada, serving since November 4, 2015. He is the leader of the Liberal Party and has focused on issues such as climate change, diversity, and social justice.";
      } else if (question.includes("boris johnson")) {
        return "Boris Johnson is the Prime Minister of the United Kingdom, assuming office on July 24, 2019. He is the leader of the Conservative Party and has been involved in various political roles, including Mayor of London.";
      } else if (question.includes("angela merkel")) {
        return "Angela Merkel served as the Chancellor of Germany from November 22, 2005, to December 8, 2021. She was the leader of the Christian Democratic Union (CDU) and played a key role in European politics.";
      } else if (question.includes("narendra modi")) {
        return "Narendra Modi is the Prime Minister of India, assuming office on May 26, 2014. He is a member of the Bharatiya Janata Party (BJP) and has been involved in Indian politics for several decades.";
      } else if (question.includes("jacinda ardern")) {
        return "Jacinda Ardern is the Prime Minister of New Zealand, serving since October 26, 2017. She is the leader of the Labour Party and gained international acclaim for her leadership during crises, including the Christchurch mosque shootings.";
      } else if (question.includes("scott morrison")) {
        return "Scott Morrison is the Prime Minister of Australia, assuming office on August 24, 2018. He is a member of the Liberal Party and has been involved in Australian politics, including serving as Treasurer.";
      } else if (question.includes("emmanuel macron")) {
        return "Emmanuel Macron is the President of France, assuming office on May 14, 2017. He is the leader of La République En Marche! (LREM) and has focused on economic and social reforms in France.";
      } else if (question.includes("shinzo abe")) {
        return "Shinzo Abe served as the Prime Minister of Japan from September 26, 2006, to September 16, 2007, and then again from December 26, 2012, to September 16, 2020. He is a member of the Liberal Democratic Party (LDP).";
      } else if (question.includes("xi jinping")) {
        return "Xi Jinping is the General Secretary of the Communist Party of China and the President of China, assuming office on March 14, 2013. He has been a key figure in Chinese politics, focusing on economic and social reforms.";
      } else if (question.includes("joko widodo")) {
        return "Joko Widodo, also known as Jokowi, is the President of Indonesia, assuming office on October 20, 2014. He is the leader of the Indonesian Democratic Party of Struggle (PDI-P) and has focused on infrastructure development.";
      } else if (question.includes("vladimir putin")) {
        return "Vladimir Putin is the President of Russia, serving since May 7, 2012, with a previous term from December 31, 1999, to May 7, 2008. He has been a prominent figure in Russian politics, previously serving as Prime Minister.";
      } else if (question.includes("benjamin netanyahu")) {
        return "Benjamin Netanyahu served as the Prime Minister of Israel from March 31, 2009, to June 13, 2021. He is the leader of the Likud Party and has been a key figure in Israeli politics for many years.";
      } else if (question.includes("moon jae-in")) {
        return "Moon Jae-in is the President of South Korea, assuming office on May 10, 2017. He is a former human rights lawyer and has been involved in various roles in South Korean politics.";
      } else if (question.includes("mario draghi")) {
        return "Mario Draghi is the Prime Minister of Italy, assuming office on February 13, 2021. He is a former President of the European Central Bank (ECB) and has been involved in economic and financial leadership.";
      } else if (question.includes("andrés manuel lópez obrador")) {
        return "Andrés Manuel López Obrador, often referred to as AMLO, is the President of Mexico, assuming office on December 1, 2018. He is the leader of the National Regeneration Movement (MORENA) and has focused on anti-corruption measures.";
      } else if (question.includes("jair bolsonaro")) {
        return "Jair Bolsonaro is the President of Brazil, assuming office on January 1, 2019. He is a former military officer and has been a controversial figure in Brazilian politics, known for his conservative views.";
      } else if (question.includes("sanna marin")) {
        return "Sanna Marin is the Prime Minister of Finland, assuming office on December 10, 2019. She is a member of the Social Democratic Party of Finland and is known for being the world's youngest serving prime minister.";
      } else if (question.includes("biden")) {
        return "Joe Biden is the President of the United States, assuming office on January 20, 2021. He is a member of the Democratic Party and has been involved in U.S. politics for several decades, previously serving as Vice President.";
      } else if (question.includes("draghi")) {
        return "Mario Draghi is the Prime Minister of Italy, assuming office on February 13, 2021. He is a former President of the European Central Bank (ECB) and has been involved in economic and financial leadership.";
      } else if (question.includes("modi")) {
        return "Narendra Modi is the Prime Minister of India, assuming office on May 26, 2014. He is a member of the Bharatiya Janata Party (BJP) and has been involved in Indian politics for several decades.";
      } else if (question.includes("jokowi")) {
        return "Joko Widodo, also known as Jokowi, is the President of Indonesia, assuming office on October 20, 2014. He is the leader of the Indonesian Democratic Party of Struggle (PDI-P) and has focused on infrastructure development.";
      } else if (question.includes("morrison")) {
        return "Scott Morrison is the Prime Minister of Australia, assuming office on August 24, 2018. He is a member of the Liberal Party and has been involved in Australian politics, including serving as Treasurer.";
      } else if (question.includes("trudeau")) {
        return "Justin Trudeau is the Prime Minister of Canada, serving since November 4, 2015. He is the leader of the Liberal Party and has focused on issues such as climate change, diversity, and social justice.";
      } else if (question.includes("macron")) {
        return "Emmanuel Macron is the President of France, assuming office on May 14, 2017. He is the leader of La République En Marche! (LREM) and has focused on economic and social reforms in France.";
      } else if (question.includes("johnson")) {
        return "Boris Johnson is the Prime Minister of the United Kingdom, assuming office on July 24, 2019. He is the leader of the Conservative Party and has been involved in various political roles, including Mayor of London.";
      } else if (question.includes("merkel")) {
        return "Angela Merkel served as the Chancellor of Germany from November 22, 2005, to December 8, 2021. She was the leader of the Christian Democratic Union (CDU) and played a key role in European politics.";
      } else  if (question.includes("imran khan")) {
        return "Imran Khan is the Prime Minister of Pakistan, assuming office on August 18, 2018. He is the leader of the Pakistan Tehreek-e-Insaf (PTI) party and has been actively involved in Pakistani politics.";
      } else if (question.includes("nawaz sharif")) {
        return "Nawaz Sharif served as the Prime Minister of Pakistan for three non-consecutive terms. His terms were from November 1, 1990, to July 18, 1993, December 17, 1996, to October 12, 1999, and June 5, 2013, to July 28, 2017.";
      } else if (question.includes("benazir bhutto")) {
        return "Benazir Bhutto was the first woman to lead a Muslim-majority country. She served as the Prime Minister of Pakistan from December 2, 1988, to August 6, 1990, and again from October 19, 1993, to November 5, 1996.";
      } else if (question.includes("pervez musharraf")) {
        return "Pervez Musharraf served as both the Chief Executive and later the President of Pakistan. He took power in a coup in 1999 and served as President from June 20, 2001, to August 18, 2008.";
      } else if (question.includes("yousaf raza gillani")) {
        return "Yousaf Raza Gillani served as the Prime Minister of Pakistan from March 25, 2008, to April 26, 2012. He is a member of the Pakistan Peoples Party (PPP).";
      } else if (question.includes("shaukat aziz")) {
        return "Shaukat Aziz served as the Prime Minister of Pakistan from August 28, 2004, to November 15, 2007. He was a member of the Pakistan Muslim League (Q) party.";
      } else if (question.includes("raja pervez ashraf")) {
        return "Raja Pervez Ashraf served as the Prime Minister of Pakistan from June 22, 2012, to March 25, 2013. He is a member of the Pakistan Peoples Party (PPP).";
      } else if (question.includes("zafarullah khan jamali")) {
        return "Zafarullah Khan Jamali served as the Prime Minister of Pakistan from November 21, 2002, to June 26, 2004. He was a member of the Pakistan Muslim League (Q) party.";
      } else if (question.includes("malik meraj khalid")) {
        return "Malik Meraj Khalid served as the Prime Minister of Pakistan from June 17, 2003, to August 28, 2004. He was a member of the Pakistan Peoples Party (PPP).";
      } else if (question.includes("moeen qureshi")) {
        return "Moeen Qureshi served as the caretaker Prime Minister of Pakistan from July 18, 1993, to October 19, 1993. He is a former Vice President of the World Bank.";
      } else if (question.includes("ghulam ishaq khan")) {
        return "Ghulam Ishaq Khan served as both the President and later the caretaker Prime Minister of Pakistan. He took office as President on March 13, 1988, and served as Prime Minister from August 6, 1990, to November 17, 1990.";
      } else if (question.includes("muhammad khan junejo")) {
        return "Muhammad Khan Junejo served as the Prime Minister of Pakistan from March 24, 1985, to May 29, 1988. He was a member of the Pakistan Muslim League (Junejo).";
      } else if (question.includes("zulfikar ali bhutto")) {
        return "Zulfikar Ali Bhutto served as the Prime Minister of Pakistan from August 14, 1973, to July 5, 1977. He later became the President of Pakistan and was a prominent political figure.";
      } else if (question.includes("hussein shaheed suhrawardy")) {
        return "Huseyn Shaheed Suhrawardy served as the Prime Minister of Pakistan from September 12, 1956, to October 17, 1957. He was a prominent political figure during the early years of Pakistan.";
      } else if (question.includes("khawaja nazimuddin")) {
        return "Khawaja Nazimuddin served as the Prime Minister of Pakistan from October 17, 1951, to April 17, 1953. He later became the Governor-General of Pakistan.";
      } else if (question.includes("liaquat ali khan")) {
        return "Liaquat Ali Khan was the first Prime Minister of Pakistan, serving from August 15, 1947, until his assassination on October 16, 1951. He played a key role in the early years of Pakistan's history.";
      } else if (question.includes("abdul majid daultana")) {
        return "Abdul Majid Daultana served as the Prime Minister of Pakistan from August 22, 1955, to March 12, 1956. He was a prominent political figure during the early years of Pakistan.";
      } else if (question.includes("feroz khan noon")) {
        return "Feroz Khan Noon served as the Prime Minister of Pakistan from December 16, 1957, to October 7, 1958. He was a member of the Republican Party.";
      } else if (question.includes("muhammad ali bogra")) {
        return "Muhammad Ali Bogra served as the Prime Minister of Pakistan from April 17, 1953, to August 12, 1955. He played a role in the early political development of Pakistan.";
      } else if (question.includes("huseyn shaheed suhrawardy")) {
        return "Huseyn Shaheed Suhrawardy served as the Prime Minister of Pakistan from September 12, 1956, to October 17, 1957. He was a prominent political figure during the early years of Pakistan.";
      } else if (question.includes("abdul sattar afghan")) {
        return "Abdul Sattar Afghan served as the caretaker Prime Minister of Pakistan from July 28, 1993, to October 19, 1993. He was appointed during a period of political transition.";
      } else if (question.includes("nazim hussain")) {
        return "Nazim Hussain served as the caretaker Prime Minister of Pakistan from November 17, 1990, to December 2, 1990. He was appointed during a period of political transition.";
      } else if (question.includes("ghulam mustafa jatoi")) {
        return "Ghulam Mustafa Jatoi served as the caretaker Prime Minister of Pakistan from August 6, 1990, to November 6, 1990. He was appointed during a period of political transition.";
      } else if (question.includes("balakh sher mazari")) {
        return "Balakh Sher Mazari served as the caretaker Prime Minister of Pakistan from July 18, 1993, to October 19, 1993. He was appointed during a period of political transition.";
      } else if (question.includes("moeenuddin ahmed qureshi")) {
        return "Moeenuddin Ahmed Qureshi served as the caretaker Prime Minister of Pakistan from July 19, 1993, to October 19, 1993. He was appointed during a period of political transition.";
      } else if (question.includes("elephant")) {
        return "The elephant is the largest land animal, known for its long trunk, large ears, and tusks. There are two main species: the African elephant and the Asian elephant.";
      } else if (question.includes("lion")) {
        return "The lion is a large carnivorous feline known for its distinctive mane. Lions are social animals, living in groups called prides, and are often referred to as the 'king of the jungle.'";
      } else if (question.includes("tiger")) {
        return "The tiger is the largest cat species, known for its distinctive orange coat with black stripes. Tigers are powerful hunters and are found in various habitats across Asia.";
      } else if (question.includes("giraffe")) {
        return "The giraffe is the world's tallest mammal, known for its long neck and distinct spotted coat. Giraffes are herbivores and are found in the savannas of Africa.";
      } else if (question.includes("penguin")) {
        return "Penguins are flightless birds adapted for life in the water. They are known for their distinctive black and white plumage and are found in the Southern Hemisphere, especially in Antarctica.";
      } else if (question.includes("koala")) {
        return "The koala is a marsupial native to Australia, known for its cuddly appearance and diet of eucalyptus leaves. Despite their name, koalas are not bears.";
      } else if (question.includes("panda")) {
        return "The giant panda is a bear native to China, known for its distinctive black and white fur. Giant pandas are herbivores and primarily eat bamboo.";
      } else if (question.includes("zebra")) {
        return "Zebras are African equids known for their distinctive black and white stripes. There are three species of zebras: the plains zebra, the Grevy's zebra, and the mountain zebra.";
      } else if (question.includes("kangaroo")) {
        return "Kangaroos are marsupials native to Australia, known for their powerful hind legs and distinctive method of locomotion, hopping. They carry and nurse their babies in a pouch.";
      } else if (question.includes("crocodile")) {
        return "Crocodiles are large aquatic reptiles known for their powerful jaws and sharp teeth. They are found in tropical regions and are expert hunters in water.";
      } else if (question.includes("dolphin")) {
        return "Dolphins are highly intelligent marine mammals known for their playful behavior and communication skills. They are social animals and are found in oceans worldwide.";
      } else if (question.includes("cheetah")) {
        return "The cheetah is a large cat known for its incredible speed, making it the fastest land animal. Cheetahs are found in parts of Africa and Iran.";
      } else if (question.includes("hippopotamus")) {
        return "The hippopotamus, or hippo, is a large herbivorous mammal known for its semi-aquatic lifestyle. Hippos are found in rivers and lakes in sub-Saharan Africa.";
      } else if (question.includes("gorilla")) {
        return "Gorillas are large primates and the largest living apes. They are herbivores and inhabit the forests of central Africa. Gorillas are known for their strength and intelligence.";
      } else if (question.includes("rhinoceros")) {
        return "Rhinoceroses, or rhinos, are large herbivorous mammals with distinctive horns on their noses. There are five species of rhinos, and they are found in various habitats.";
      } else if (question.includes("polar bear")) {
        return "The polar bear is a large carnivorous bear native to the Arctic region. Polar bears are adapted to life on sea ice and are powerful swimmers.";
      } else if (question.includes("parrot")) {
        return "Parrots are colorful birds known for their ability to mimic human speech. They are found in tropical and subtropical regions and are popular as pets.";
      } else if (question.includes("octopus")) {
        return "The octopus is a highly intelligent marine animal known for its soft body, beak, and tentacles. Octopuses are found in oceans around the world.";
      } else if (question.includes("bald eagle")) {
        return "The bald eagle is a large bird of prey native to North America. It is known for its distinctive white head and tail and is a symbol of the United States.";
      } else if (question.includes("jaguar")) {
        return "The jaguar is a large cat native to the Americas, known for its powerful build and distinctive coat pattern with rosettes. Jaguars are strong swimmers.";
      } else if (question.includes("pangolin")) {
        return "The pangolin is a unique mammal covered in protective scales made of keratin. Pangolins are found in Asia and Africa and are known for their specialized feeding habits.";
      } else if (question.includes("platypus")) {
        return "The platypus is a unique monotreme mammal native to Australia, known for its duck-bill, webbed feet, and ability to lay eggs. It is one of the few egg-laying mammals.";
      } else if (question.includes("elephant seal")) {
        return "The elephant seal is a large marine mammal named for its trunk-like proboscis. Elephant seals are found in the Southern Hemisphere and are excellent swimmers.";
      } else if (question.includes("chimpanzee")) {
        return "Chimpanzees are great apes native to Africa, known for their intelligence and social behavior. They are closely related to humans and share a common ancestor.";
      } else if (question.includes("peacock")) {
        return "The peacock is a large and colorful bird known for its impressive tail feathers, or plumage. Male peafowls are called peacocks, and females are called peahens.";
      } else if (question.includes("meerkat")) {
        return "Meerkats are small carnivores known for their cooperative behavior and standing on their hind legs to survey their surroundings. They are found in parts of Africa.";
      } else if (question.includes("armadillo")) {
        return "Armadillos are small mammals known for their armor-like shell made of bony plates. They are found in the Americas and are skilled diggers.";
      } else if (question.includes("sloth")) {
        return "Sloths are slow-moving mammals known for their relaxed and leisurely lifestyle. They are found in Central and South America and spend most of their time in trees.";
      } else if (question.includes("apple")) {
        return "Apples are crisp and sweet fruits that come in various colors, including red, green, and yellow. They are a popular and versatile fruit enjoyed worldwide.";
      } else if (question.includes("banana")) {
        return "Bananas are elongated and curved fruits with a yellow skin. They are a rich source of potassium and are consumed by peeling the skin and eating the soft, sweet flesh.";
      } else if (question.includes("orange")) {
        return "Oranges are round citrus fruits known for their bright orange color and juicy, tangy flavor. They are a good source of vitamin C and are often consumed fresh or as juice.";
      } else if (question.includes("mango")) {
        return "Mangoes are tropical fruits with a sweet and juicy flesh. They come in various varieties, each with its own unique flavor, texture, and color.";
      } else if (question.includes("strawberry")) {
        return "Strawberries are small, red berries with a sweet taste. They are often enjoyed fresh, in desserts, or as part of jams and sauces.";
      } else if (question.includes("grape")) {
        return "Grapes are small, round fruits that come in various colors, including red, green, and purple. They are commonly eaten fresh or dried into raisins.";
      } else if (question.includes("watermelon")) {
        return "Watermelons are large, green-skinned fruits with sweet and juicy red or pink flesh. They are a refreshing summer fruit, often enjoyed chilled.";
      } else if (question.includes("kiwi")) {
        return "Kiwi, also known as kiwifruit, is a small, brown, fuzzy fruit with green flesh. It has a sweet and tangy flavor and is rich in vitamin C.";
      } else if (question.includes("pineapple")) {
        return "Pineapples are tropical fruits with a spiky exterior and sweet, yellow flesh. They are often enjoyed fresh, juiced, or used in various culinary dishes.";
      } else if (question.includes("pear")) {
        return "Pears are sweet and juicy fruits with a smooth skin. They come in various varieties, including Anjou, Bosc, and Bartlett, each with its own flavor and texture.";
      } else if (question.includes("cherry")) {
        return "Cherries are small, round fruits with a sweet or tart flavor. They come in various colors, including red and dark red, and are often enjoyed fresh or in desserts.";
      } else if (question.includes("avocado")) {
        return "Avocado is a creamy and nutrient-dense fruit with a green or black exterior. It is known for its smooth texture and is commonly used in savory dishes and salads.";
      } else if (question.includes("pomegranate")) {
        return "Pomegranates are round fruits with a tough, red or pink outer skin and juicy, seed-filled interior. They are rich in antioxidants and have a sweet and tangy taste.";
      } else if (question.includes("banana")) {
        return "Bananas are elongated and curved fruits with a yellow skin. They are a rich source of potassium and are consumed by peeling the skin and eating the soft, sweet flesh.";
      } else if (question.includes("lemon")) {
        return "Lemons are citrus fruits with a bright yellow exterior and sour taste. They are often used in cooking, baking, and as a flavoring in drinks.";
      } else if (question.includes("coconut")) {
        return "Coconuts are large, brown fruits with a hard shell and sweet, white flesh. They are a versatile fruit used in cooking, baking, and for obtaining coconut water.";
      } else if (question.includes("peach")) {
        return "Peaches are fuzzy-skinned fruits with a sweet and juicy flesh. They come in various varieties, including freestone and clingstone, and are enjoyed fresh or in desserts.";
      } else if (question.includes("apricot")) {
        return "Apricots are small, orange fruits with a smooth skin and sweet taste. They are often eaten fresh or dried and are a good source of vitamins A and C.";
      } else if (question.includes("blueberry")) {
        return "Blueberries are small, round berries with a sweet and tart flavor. They are often enjoyed fresh, in smoothies, or as part of desserts and baked goods.";
      } else if (question.includes("fig")) {
        return "Figs are sweet and chewy fruits with a thin skin. They come in various colors, including purple and green, and are often eaten fresh or dried.";
      } else if (question.includes("blackberry")) {
        return "Blackberries are dark purple-black berries with a sweet and slightly tart taste. They are often enjoyed fresh, in jams, or as part of desserts.";
      } else if (question.includes("guava")) {
        return "Guava is a tropical fruit with a fragrant aroma and sweet, pink or white flesh. It is rich in vitamin C and is often consumed fresh or in juices.";
      } else if (question.includes("cranberry")) {
        return "Cranberries are small, red berries with a tart taste. They are often used in sauces, juices, and as part of festive holiday dishes.";
      } else if (question.includes("dragon fruit")) {
        return "Dragon fruit, also known as pitaya, is a unique-looking fruit with a vibrant pink or yellow skin and white or red flesh speckled with black seeds.";
      } else if (question.includes("kiwi")) {
        return "Kiwi, also known as kiwifruit, is a small, brown, fuzzy fruit with green flesh. It has a sweet and tangy flavor and is rich in vitamin C.";
      } else if (question.includes("passion fruit")) {
        return "Passion fruit is a round or oval fruit with a tough outer rind and juicy, seed-filled interior. It has a unique flavor that is both sweet and tart.";
      } else if (question.includes("mango")) {
        return "Mangoes are tropical fruits with a sweet and juicy flesh. They come in various varieties, each with its own unique flavor, texture, and color.";
      } else if (question.includes("kiwi")) {
        return "Kiwi, also known as kiwifruit, is a small, brown, fuzzy fruit with green flesh. It has a sweet and tangy flavor and is rich in vitamin C.";
      }
       else {
        return "I'm sorry, I don't have an answer for that question. Please try asking about a different topic.";
      }
  
  
  }