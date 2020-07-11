Streamline

Live link: https://streamline-dusky.vercel.app/

API repo: https://github.com/greynagle/streamline-api

Landing page:

![landing](https://raw.githubusercontent.com/greynagle/streamline/master/images/landing.png)

New Part Form

![new part form](https://raw.githubusercontent.com/greynagle/streamline/master/images/newprt.png)

Component Tables

![available components](https://raw.githubusercontent.com/greynagle/streamline/master/images/Data.png)

New Assembly Form

![new assembly form](https://raw.githubusercontent.com/greynagle/streamline/master/images/newasm.png)

Contents of Assembly

![assembly contents](https://raw.githubusercontent.com/greynagle/streamline/master/images/asmcon.png)

New Machine Form

![new machine form](https://raw.githubusercontent.com/greynagle/streamline/master/images/newmach.png)

Machine Table

![machine data](https://raw.githubusercontent.com/greynagle/streamline/master/images/mach.png)

New Test Form

![new test form](https://raw.githubusercontent.com/greynagle/streamline/master/images/newtest.png)

Test History Table

![testing history](https://raw.githubusercontent.com/greynagle/streamline/master/images/testhist.png)

Test Contents

![test contents](https://raw.githubusercontent.com/greynagle/streamline/master/images/testcon.png)

_______________________________________

The Streamline app is a factory simulation where users define components and the machines that process them, and then run tests. The tests return time values for processing that allow users to make judgements for resource allocation re number of machines or taking steps to speed up the processing of individual components.

The user should begin in the Data section, where they can define new parts/assemblies. Once they have all their assemblies and contents generated, they should verify that they have the proper number of machines in the Manufacturing tab. Finally, the user should define a new set of assemblies to process in the Testing tab.

_______________________________________

This app is powered in the front-end by React & React Router, and in the back-end by NodeJS, Express, PostgresQL, & Knex.js
