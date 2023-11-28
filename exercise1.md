The CI/CD pipeline has a sequence of stages designed to help test, deliver, and deploy code more efficiently. This approach is iterative and Agile in nature. The emphasis is placed on small, frequent changes to the code, which enhance its features and the overall functionality of the application.

The main steps on a very high level involved in CI/CD are:-

1. Source - Write code.
2. Lint - Follow best practices and convention, get rid of any syntax or compile time errors.
3. Build - Make the app ready for production.
4. Test - Ensure all required features are working as expected.
5. Deploy - Make the app available for end users.

In case of a small team of developers of about 6 who are working on a simple web app based on, for example Python, Github would be a very good option for source code control as its very popular and easy to collaborate with others. For linting and code analysis, Pylint can be used. For automated build and deploy, Travis CI is a great continuous integration service. It integrates very well with Github, Bitbucket, or a private Git repo. It is like a middleman that protects you from breaking the code. And for testing, Pytest can be used. For all of this, a cloud based environment like AWS or Linode would be much better as most of the other tasks around the environment like security, server patches/updates and maintenance, scalability would be easily and automatically taken care of and saving a lot of time, effort and cost. The team, hence can focus more on the development of the app. A self hosted environment would require a separate dedicated team (DevOps) for CI/CD.
