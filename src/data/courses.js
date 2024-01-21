const courses = {
    get: "Success",
    listOfCourses: [
      {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: require("./../images/react_native.png"),
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 2nd course
      {
        id: 2,
        name: 'Introduction to Node JS',
        instructor: 'Tony Stark',
        description: 'Learn the basics of Node JS development.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Node JS',
            content: 'Overview of Node JS, setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building Your Program',
            content: 'Creating a simple program using Node JS components.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
          },
          {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 3rd course and so on...
      {
        id: 3,
        name: 'Full Stack Web Development',
        instructor: 'Jane Smith',
        description: 'Become a full-stack web developer with hands-on experience in both frontend and backend technologies.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of HTML, CSS, and JavaScript'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Full Stack Development',
            content: 'Overview of frontend and backend technologies, setting up your development environment.'
          },
          {
            week: 2,
            topic: 'Building a Responsive Web App',
            content: 'Creating a responsive web application using modern frontend frameworks.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 105,
            name: 'Eva Johnson',
            email: 'eva@example.com',
          },
          {
            id: 106,
            name: 'Frank Miller',
            email: 'frank@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 4th course
      {
        id: 4,
        name: 'Python for Data Science',
        instructor: 'Alice Watson',
        description: 'Explore the world of data science using the Python programming language.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Python',
            content: 'Overview of the Python programming language, setting up your Python environment.'
          },
          {
            week: 2,
            topic: 'Data Manipulation with Pandas',
            content: 'Learn how to manipulate and analyze data using the Pandas library.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 107,
            name: 'Grace Johnson',
            email: 'grace@example.com',
          },
          {
            id: 108,
            name: 'Harry White',
            email: 'harry@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 5th course
      {
        id: 5,
        name: 'Mobile App Design with Figma',
        instructor: 'Alex Turner',
        description: 'Master the art of mobile app design using Figma.',
        enrollmentStatus: 'Open',
        thumbnail: require("./../images/figma.png"),
        duration: '6 weeks',
        schedule: 'Fridays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['Basic design knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Mobile App Design',
            content: 'Overview of mobile app design principles and introduction to the Figma tool.'
          },
          {
            week: 2,
            topic: 'Wireframing and Prototyping',
            content: 'Create wireframes and interactive prototypes for your mobile app.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 109,
            name: 'Ivy Brown',
            email: 'ivy@example.com',
          },
          {
            id: 110,
            name: 'Jack Green',
            email: 'jack@example.com',
          },
          // Additional enrolled students...
        ],
      },
      {
        id: 6,
        name: 'Machine Learning Fundamentals',
        instructor: 'David Williams',
        description: 'Dive into the fundamentals of machine learning and understand its practical applications.',
        enrollmentStatus: 'Open',
        thumbnail: require("./../images/machine_learning.jpg"),
        duration: '12 weeks',
        schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of programming and statistics'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Machine Learning',
            content: 'Overview of machine learning, types of machine learning, and basic concepts.'
          },
          {
            week: 2,
            topic: 'Supervised Learning',
            content: 'Understanding and implementing supervised learning algorithms.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 111,
            name: 'Katherine White',
            email: 'katherine@example.com',
          },
          {
            id: 112,
            name: 'Liam Johnson',
            email: 'liam@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 7th course
      {
        id: 7,
        name: 'Cybersecurity Essentials',
        instructor: 'Emma Davis',
        description: 'Explore the essential concepts of cybersecurity and learn to secure digital assets.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Mondays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of computer networks'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Cybersecurity',
            content: 'Overview of cybersecurity, common threats, and security principles.'
          },
          {
            week: 2,
            topic: 'Network Security',
            content: 'Securing computer networks and understanding network vulnerabilities.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 113,
            name: 'Mia Johnson',
            email: 'mia@example.com',
          },
          {
            id: 114,
            name: 'Noah Brown',
            email: 'noah@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 8th course
      {
        id: 8,
        name: 'Data Visualization with D3.js',
        instructor: 'Olivia Turner',
        description: 'Learn to create stunning data visualizations using the D3.js library.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        schedule: 'Tuesdays, 5:30 PM - 7:30 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of HTML, CSS, and JavaScript'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Data Visualization',
            content: 'Overview of data visualization, importance, and types of visualizations.'
          },
          {
            week: 2,
            topic: 'Getting Started with D3.js',
            content: 'Setting up D3.js, creating basic visualizations, and understanding data binding.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 115,
            name: 'Oliver Green',
            email: 'oliver@example.com',
          },
          {
            id: 116,
            name: 'Penelope White',
            email: 'penelope@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // 9th course
      {
        id: 9,
        name: 'iOS App Development with Swift',
        instructor: 'William Johnson',
        description: 'Master the art of iOS app development using the Swift programming language.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Thursdays and Saturdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of programming and Swift'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to iOS Development',
            content: 'Overview of iOS development, Xcode setup, and creating your first iOS app.'
          },
          {
            week: 2,
            topic: 'Building User Interfaces with Swift',
            content: 'Designing and implementing user interfaces using Swift and Interface Builder.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 117,
            name: 'Quinn Miller',
            email: 'quinn@example.com',
          },
          {
            id: 118,
            name: 'Rachel Brown',
            email: 'rachel@example.com',
          },
          // Additional enrolled students...
        ],
      },
      // ...
      // 10th course
      {
        id: 10,
        name: 'Advanced Web Development',
        instructor: 'Jane Doe',
        description: 'Take your web development skills to the next level.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate knowledge of HTML, CSS, and JavaScript'],
        syllabus: [
          {
            week: 1,
            topic: 'Modern CSS Techniques',
            content: 'Learn advanced CSS features and techniques.'
          },
          {
            week: 2,
            topic: 'Frontend Frameworks',
            content: 'Introduction to popular frontend frameworks like React and Vue.'
          },
          // Additional weeks and topics...
        ],
        students: [
          {
            id: 103,
            name: 'Charlie Brown',
            email: 'charlie@example.com',
          },
          {
            id: 104,
            name: 'Diana Prince',
            email: 'diana@example.com',
          },
          // Additional enrolled students...
        ],
      },
    ],
  };
  
  export default courses;
  