document.querySelector("#bstProjectsContent").innerHTML = `
<div class="jumbotron">
    <h2>BST Point Of Sale</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62" alt="Point of sale software">
        </div>

        <div class="col-6">
            <p>
                Helped to design, implement features and changes, bug fixes, and debug a point of sale software used at Clothing Exchange, Childrens Orchard, Device Pitstop, and Clothes Mentor.
            </p>
            <p>
                The system allowed selling to customers, buying items from customers, inventory adjustments, payouts, and money transfers.
            </p>
            <p>
                The system interacted with a separate loyalty program and a separate credit card terminal.
            </p>
            <p>
                The system was written in Clarion and connected to various dll's written in c and c# along with a sql backend.
            </p>
        </div>
    </div>
</div>

<div class="jumbotron">
    <h2>Data Initializer</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <p>
                I lead the development on the data initializer which was used to configure and create data for all new stores. It grabbed their starting files from our cloud database.
            </p>
            <p>
                The program was built in C# and XAML using mvvm standards.
            </p>
        </div>

        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://cdn.pixabay.com/photo/2015/12/01/08/27/notebook-1071777_1280.jpg" alt="">
        </div>
    </div>
</div>



<div class="jumbotron">
    <h2>Data Updater</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://cdn.pixabay.com/photo/2016/09/15/18/32/update-1672363_1280.jpg" alt="">
        </div>

        <div class="col-6">
            <p>
                Helped to design, bug fix, and debug our automatic updater. The updater reads from the cloud and prompts users when an update is available. The updater downloads any new files, and makes any data or database changes necessary for the update to succeed.
            </p>
            <p>
                The automatic updater runs as a windows service and was built using C#.
            </p>
        </div>
    </div>
</div>


<div class="jumbotron">
    <h2>Data Pusher</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <p>
                Helped to design, bug fix, and debug a data pushing service which pushed data changes to our cloud and combined with other store's data. This pusher ran every 30 seconds and allowed for real time reporting.
            </p>
            <p>
                The data pusher runs as a windows service and was built using C#.
            </p>
        </div>

        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://cdn.pixabay.com/photo/2016/11/30/18/14/download-1873539_960_720.png" alt="">
        </div>
    </div>
</div>


<div class="jumbotron">
    <h2>Data Converter</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg" alt="">
        </div>

        <div class="col-6">
            <p>
                I lead the development on the data converter which was used to convert csv spreadsheets from another POS system to BST's format stored in SQL.
            </p>
            <p>
                The program was built in C# and T-SQL.
            </p>
        </div>
    </div>
</div>


<div class="jumbotron">
    <h2>ZOHO</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <p>
                Before our personalized report platform, we used Zoho. Zoho had quite a few limitations, hence the need for our own platform. With each new version of BST. our database changed in one way or another. Instead of changing all the queries and reports on Zoho, before pushing data to Zoho we converted it back to its original format. This process has been used for the last few years and will continue to be used until the report platform has all the reports that Zoho had.
            </p>
            <p>
                I also helped with with debugging strange issues in Zoho. If you want to hear some Zoho horror stories, send me an email. I've got a few.
            </p>
        </div>

        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Zoho_headquarters_in_chennai.jpg" alt="">
        </div>
    </div>
</div>

<div class="jumbotron">
    <h2>REPORT PLATFORM</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="">
        </div>

        <div class="col-6">
            <p>
                Assisted in the backend development or a personalized report platform. Mainly focused on retrieval of data and speed optimization.
            </p>
            <p>
                Report platform backend was built in Node.JS and T-SQL.
            </p>
        </div>
    </div>
</div>


<div class="jumbotron">
    <h2>GENERAL SQL HELP</h2>
</div>
<div class="container">
    <div class="row align-items-center">
        <div class="col-6">
            <p>
                BST used MSSQL as it's database manager. On a daily bases, I would run queries both simple and complex to help the FBC's perform their jobs or stores understand why their quickbooks account was off by x amount.
            </p>
        </div>

        <div class="col-6">
            <img class="img-thumbnail img-fluid w-75" src="https://cdn.pixabay.com/photo/2016/12/09/18/30/database-schema-1895779_1280.png" alt="">
        </div>
    </div>
</div>
`