const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const { urlencoded } = require('body-parser');
const { v4: uuid } = require('uuid');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let blogs = [{
        id: uuid(),
        title: '7 signs you’re rich, even if it doesn’t feel like it',
        username: 'Business Insider',
        blog: "“Rich” can be just as subjective as “happy” — it’s different for everyone. But there are still a few universal indications of wealth.\nAn individual stands next to a white board.\nYou might actually be richer than you think. Photo: Klaus Vedfelt\/Getty Images\nBy Libby Kane\n“Rich” is relative.\nMaybe you think it means being in the top 1% of earners in some of the wealthiest cities in the US. Maybe it means being able to buy a flashy mansion or spend your life flitting from luxury vacation to luxury vacation.\nBut former investment banker Kristin Addis told Insider she feels richer earning about 40% of her previous six-figure salary while she travels the world. Nick and Dariece Swift, who also left their jobs to make a fraction of their former income, said they’re happier earning less. The self-made millionaire stars of “West Texas Investor’s Club” say their relationships are more valuable than the money they earn.\nUltimately, “rich” can be just as subjective as “happy” — it’s different for everyone. However, there are a few universal indications of wealth, no matter how you view it.\n1. You can save money\n“Most people fail to realize that in life, it’s not how much money you make. It’s how much money you keep,” writes Robert Kiyosaki in “Rich Dad Poor Dad.”\nAt the end of the day, money does not solve financial problems — in fact, it often exacerbates them. Consider the lottery winners who lost it all within a few years, or the professional athletes who made millions in their 20s and wound up broke.\n“Money often makes obvious our tragic human flaws, putting a spotlight on what we don’t know,” says Kiyosaki. “That is why, all too often, a person who comes into a sudden windfall of cash — let’s say an inheritance, a pay raise, or lottery winnings — soon returns to the same financial mess, if not worse, than the mess they were in before.”\nIf you can hold on to a portion of the money you earn, you’re in good shape.\n2. You can live comfortably below your means\nLiving below your means is one of the major tenets of responsible money management: spending less than you earn, however much that may be.\nSelf-made billionaire Anthony Hsieh told Insider that learning to live within his means was a lesson he learned from his parents, who immigrated to the US from Taiwan.\nThe habit “has helped me quite a bit and that’s one of the reasons I’ve survived and flourished in consumer lending for 30 years,” he said. “My career spans four different economic and housing cycles and I’m still sitting at the table as a key executive in consumer lending. I think part of that is my discipline of making certain that the company and myself don’t overspend.”\nLiving within your means might not sound like a big deal if you’re already doing it, but not everyone can manage. A 2019 report released by GOBankingRates found that a third of Americans surveyed are living paycheck to paycheck.\n3. You will eventually be able to pay for the things you really want\nIf you can go out and buy a yacht in cash today, most people would agree that you’re rich. However, if you can go out and buy that same yacht five years from now after setting a savings goal and socking away money on a monthly or annual basis, guess what? You’re probably still rich.\nSurvey after survey turns up the same dispiriting result: Americans aren’t saving all that much. The same GOBankingRates survey reported that 45% of respondents had no household savings, and an estimated 40 million households have no retirement savings whatsoever.\nWhich brings us to our next point …\n4. You’re going to be able to afford to retire as planned\nRetirement is expensive. Experts say that to live lavishly in retirement, you need to replace about 70%-80% of your current income (although that number is disputed). Even if you’ve downsized, and maybe even relocated to an area with a low cost of living, retirement is still a prolonged period of supporting yourself on little or no income.\nTraditionally, “retirement age” is 65, but that’s changing as more Americans find they’re unable to float 20-plus years of living without a paycheck. Data from a 2019 Bureau of Labor Statistics report found that nearly 20% of Americans age 65 and older are still working.\nIf you can afford to retire when you want to, it’s a luxury.\n5. You aren’t motivated purely by money\nOne common thread you’ll find among self-made millionaires and those who study them is that “rich people” tend to focus on something other than the dollar signs: They’re solving a problem, or following a passion, or striving to build their business as much as possible.\nThat, right there, is a luxury. If you can’t make ends meet, you can bet you’ll be focusing on the dollar signs over the intellectual fulfillment of your job.\nThis doesn’t mean you can’t be happy to earn a sizable paycheck or you can’t be excited to watch your investments grow, but money isn’t your chief motivator or source of joy. If you have the luxury to focus on something other than the money, you’re in a good place.\n6. You view money as an ally\n“Most people have a dysfunctional, adversarial relationship with money,” writes self-made millionaire Steve Siebold. “After all, we are taught that money is scarce — hard to earn and harder to keep. If you want to start attracting money, stop seeing it as your enemy and think of it as one of your greatest allies.”\nThe reason wealthy people earn more wealth is because they’re not afraid to admit that money can solve most problems, Siebold says: “[The middle class] sees money as a never-ending necessary evil that must be endured as part of life. The world class sees money as the great liberator, and with enough of it, they are able to purchase financial peace of mind.”\nIf you aren’t scared of money — if you view it as an ally, and a tool that can help you achieve what you want in life — you’re ahead of the game.\n7. You aren’t stuck\n“What I have realized over time is that in many ways, money spells freedom,” self-made millionaire and NastyGal founder Sophia Amoruso wrote in her book, “#GIRLBOSS.” She continued:\n“If you learn to control your finances, you won’t find yourself stuck in jobs, places, or relationships that you hate just because you can’t afford to go elsewhere. … Being in a good spot financially can open up so many doors. Being in a bad spot can slam them in your face.”\nKathleen Elkins contributed reporting.\nFor more great stories, visit Insider’s homepage.",
        dur: '9'
    },
    {
        id: uuid(),
        title: 'A quick way to build applications in python',
        username: 'Python nerd',
        blog: "Building Python applications that have graphical user interfaces and are doing sophisticated tasks might look difficult. In a recently published article (see the link below), I mentioned how only 7 Python libraries are needed to start building applications.\nBuild Your First Data Science Application\nSeven Python libraries to make your first data science MVP application.\ntowardsdatascience.com\n\nThis article will show you how to build a simple translation application in a few lines. I only use two Python libraries: requests and ipywidgets.\nBasics\nI chose to write a translator application as an example to show you how it is easy to build applications in Python. This application gets an English text and shows its Spanish translation. Very easy and straightforward.\nTo do so, we need two parts inside the application. The first part is a backend that does the translation, and the second part is a frontend or a graphical user interface (GUI) that interacts with the user (taking the input text and showing the output text).\nFor the backend, I use Azure Translation API. If you are not familiar with the concept of API (Application Programming Interface), I try to explain it in an effortless way. An API is a way (i.e., protocol) to ask a service (for example, translation) from a service provider (usually a server). For example, you can use Google Maps API to get the driving distance between two locations. Imagine, if Google Maps API did not exist, then you should write your own code to calculate this driving distance based on roads databases. Simply, APIs prevent you from reinventing the wheel. Sometimes third party APIs are free, but most of the time, you must pay a little bit of cost (especially if you are using them frequently). For this article\'s purpose, we use Microsoft Azure Translator API, which is free for limited use. If you don’t have an Azure account, please read the next section; otherwise, you can skip it.\nHow to create a free Azure account\nIf you don’t have an Azure account, you can sign up for a free one. Follow the instructions in the following link. It is easy and gives you free access to tens of awesome APIs and services.\nCreate an Azure account - Learn\nThe first step to using Azure is to sign up. You may sign up directly through Azure.com, with the help of a Microsoft…\ndocs.microsoft.com\n\nAfter creating a free Azure account, you need to add Azure Translator API to your account. Again, it is free and easy. You need to follow the steps in the following link.\nGet started - Translator - Azure Cognitive Services\nDon\'t have an account? You can create a free account to experiment at no charge. Already have an account? Sign in After…\ndocs.microsoft.com\n\nIf you do everything correctly, you must have an API key (i.e., Authentication key). The key is simply a string of characters that lets you work with the Azure Translator API. You need the key to put it in your Python program (the next section). REMEMBER, never share your API keys with anyone (including your users).\nPart A) API\nNow that you have your API key for Azure Translator (congratulations!), let’s see how we can talk to the API through Python.\nOne of the most popular Python libraries to work with APIs is “requests.” You may install it using\npip install requests\nor\nconda install -c anaconda requests\nThe following Python function gets a text and sends a request to Azure Translator API.\n\nBefore going further, I must tell you an important point (especially to beginners). The truth is:\nEach API has a set of rules for requesting a service. Working with Google Maps API is different from Azure Translator API. To work with an API, you must read the documentation.\nLet’s go back to our code …\nIn the code, you must put your API key (see API_KEY) and specify your API region (see API_REGION). requests.post sends a POST request to Azure Translator API. To send a request, you need to pass an URL address, parameters, headers, and a body. The URL address is a web address that Azure servers are constantly monitoring for any upcoming requests. As soon as the server sees your request, first, it checks your credentials in the header. If your credentials are valid, it looks at your parameters to understand what you are requesting. For example, in this case, I am requesting version 3.0 of the translator for translating from English (i.e. en) to Spanish (i.e. es). If the parameters are valid, then the API server takes the body (i.e., a JSON object in this example) and processes my requests. Finally, the requests.post send me a JSON object back that I named as response.\nYou can check the function with a simple example. Add the following lines at the end of the code and run it.\nif __name__ == \'__main__\':\n    print(azure_translate(\'Hello world.\'))\nYou must see an output like this.\n[{\'translations\': [{\'text\': \'Hola mundo.\', \'to\': \'es\'}]}]\nThis is a JSON (or Python dictionary) object in response to your request. If you look closely, you see the translation as well as some additional information such as the translated language (i.e., Spanish or es).\nAgain, everything that is said here is based on the documentation, and you must be able to work with any API after reading the documentation. If you don’t read it, you never know how to communicate with an API and what parameters with what data structure should be passed.\nPart B) GUI\nNow that you have your backend ready, it is time to build your frontend. As I mentioned previously (link), ipywidgets and Jupyter Notebooks are good combinations to build simple user interfaces for browsers.\nFor my simple application, I only need a few elements in my user interface. Those elements are:\nA header to show the name of the application (a cosmetic feature).\nA text area widgets to input an English text.\nA button to request the translation after clicking.\nAn empty area to print the Spanish translation.\nIpywidgets has a set of widgets to create different sorts of user interfaces and dashboards with them. For this application, I’ll use an HTML widget for the header, a Textarea widget for input text, a Button widget for requesting the translation, and an Output widget for printing out the results. Then I put them vertically aligned in a container using a VBox widget.\nThe only trick is how to request a translation service when the user clicks on the translation button. It is simple to define this action upon the clicking event. To do so, I define a function and pass it to on_click method of the button. When a user clicks on the translation button, the specified function will run and send a request to Azure Translator API. Simple, right?\nThe following codes show the front end part of the application.\n\nFinal Product\nNow, it is time to put everything together in a Jupyter Notebook file. Put both parts in a Jupyter Notebook file and save it (e.g., Translator_API.ipynb).\nImage for post\nImage by the author.\nSince Ipywidgets work very well with Chrome, check if your default browser is Chrome. After setting your default browser to Chrome, open a terminal and run your Jupyter Notebook code via Voila.\nvoila Translator_API.ipynb\nAfter a few seconds, you must see your application automatically opened in the browser. Give it a test like what I did here.\nImage for post\nImage by the author.\nVoila!!!!! you made your simple Translator application in a few steps. You can improve your GUI look by using ipyvuetify, a library full of modern-looking widgets. You can also share your MVP (minimum viable product) with other people using ngrok (read the following article for details).\nHow to Share your Jupyter Notebook in 3 Lines of Code with Ngrok\nImagine having your Friends Working with your Local Jupyter Notebook in a Remote Machine\ntowardsdatascience.com\n\nSummary\nBuilding applications in Python is easy and fast. You can use APIs to avoid reinventing the wheel and build your backend. You can also use simple libraries like ipywidgets or ipyvuetify to build a simple GUI for your application. In this article, I showed you how to build a simple translator application with a few lines of code. The same approach can be applied to more sophisticated MVP applications.\n",
        dur: '10'
    },
    {
        id: uuid(),
        title: 'Crack coding interviews',
        blog: "Preparing for coding interviews is no easy task. You need the skills to break down the problem and to deploy the right tools. The Educative Team has always been on the mission to make coding interview prep more accessible for engineers. We’ve learned firsthand that the best way to succeed is not to memorize 1,500+ LeetCode problems.\nThat’s why we want to approach interview prep a bit differently today by tackling some real-world problems faced by tech companies. Learning how to build real-world features (e.g. how to merge recommendations on Amazon) is more fun, and it’s much easier to remember what you learned that way. If you can understand a problem’s underlying pattern, you can apply it to just about any question.\nWe will dive into the solutions for a few common real-world coding problems and build five features. We will offer our solutions in Java.\nThis tutorial at a glance:\nNetflix feature: Group similar titles (hashmaps)\nFacebook feature: Friend circles (DFS)\nGoogle Calendar feature: Find meeting rooms (Heaps)\nAmazon feature: Products in price range (BST)\nTwitter feature: Add likes (Strings)\nWhere to go from here\n1. Netflix Feature: Group Similar Titles (hash maps)\nNetflix is one of the biggest video streaming platforms out there. The Netflix engineering team is always looking for new ways to display content. For this first problem, imagine you’re a developer on this team.\nTask: Our task here is to improve search results by enabling users to see relevant search results without being hindered by typos. We are calling this the “Group Similar Titles” feature.\nFirst, we need to determine how to individually group any character combination for a given title. Let’s imagine that our library has the following titles: \"duel,\" \"dule,\" \"speed,\" \"speed,\" \"deul,\" and \"cars.\" You are tasked to design a functionality so that if a user misspells a word (e.g. “speed” as “spede”), they will still be shown the correct title.\nFirst, we need to split our titles into sets of words so that the words in a set are anagrams. We have three sets: {\"duel\", \"dule\", \"deul\"},{\"speed\", \"spede\"}, and {\"cars\"}. The search results should include all members of the set that the string is found in. It’s best to pre-compute our sets rather than forming them when a user searches.\nCombining similar groups\nCombining similar groups\nThe members of each set have the same frequency of each alphabet, so the frequency of each alphabet in words in the same group is equal. For example, in our {{\"speed\", \"spede\"}} set, the frequency of the characters is the same in each word: s, p, e, and d.\nSo, how do we design and implement this functionality? Let’s break it down.\nFor each title, we need to compute a 26-element vector. Each vector element represents the frequency of an English letter in a title. We can represent frequency using a string that is fixed with # characters. This mapping process generates identical vectors for the strings that are anagrams. For example, we represent abbccc as #1#2#3#0#0#0...#0.\nWe then use this vector as a key for inserting titles into a hashmap. Our anagrams will all be mapped to the same entry. When a user searches a title or word, it should compute the 26-element English letter frequency vector based on input. It will then search the hashmap and return all the map entries using the vector.\nWe then store a list of calculated character counts as a key in a hashmap and assign a string as its value.\nEach value is an individual set, so we return the values of the hashmap.\nStoring sets in a key-value storage\nStoring sets in a key-value storage\nJava solution\n\nIf you want to see the solution in Python, check out the original post.\nComplexity measures\nTime complexity: O(n∗k) since we are counting each letter for each string in a list.\nSpace complexity: O(n∗k) since every string is stored as a value in the dictionary and the size of the string can be k.\n2. Facebook Feature: Friend Circles (DFS)\nFacebook is the biggest social media company in the world. They also own and operate Snapchat and Instagram. Pretend you are a Facebook engineer team and you are tasked to improve integration among their sister platforms.\nTask: Our task here is to find all the people on Facebook who are in a user’s friend circle. We are calling this the “Friend Circles” feature.\nWe need to first identify the people who are in each user’s friends circle, which includes users who are directly or indirectly friends with another user. Let’s assume there are n users on Facebook. The friendship connection is transitive.\nExample: If Nick is a direct friend of Amy, and Amy is a direct friend of Matt, then Nick is an indirect friend of Matt.\nWe will use an n*n square matrix. For example, cell [i,j] will hold value 1 if these users are friends. If not, the cell will hold the value 0. In the illustration below, there are two friend circles from the example above. Nick is only friends with Amy, but Amy is friends with Nick and Matt. This forms a friend circle. Mario makes another friend circle on his own.\nExample of friend circles\nThink of our symmetric input matrix as an undirected graph. Both the indirect and direct friends who are in one friend circle also exist in one connected component​ in our graph. This means that the number of connected graph components will give us how many friend circles we have.\nSo, our task is to find the number of connected components. We treat the input matrix as an adjacency matrix. So, how do we design and implement this? Let’s break it down.\nFirst, we initialize an array named visited. This will track the visited vertices of size n with 0 as the value for each index.\nThen, we traverse the graph using DFS if visited[v] is 0. If not, we move to the next v.\nThen, set visited[v] to 1 for every v that our DFS traversal runs into.\nWhen the DFS traversal is done, we should increment the circle counter by 1. This means that a connected component has been fully traversed.\nJava solution\n\nComplexity measures\nTime complexity: O(n​2​​) because we traverse the complete matrix of size n².\nSpace complexity: O(n) because the visited array that stores our visited users is of size n.\n3. Google Calendar Feature: Find Meeting Rooms (Heaps)\nThe Google Calendar tool is part of the GSuite used to manage events and reminders. Imagine you are a developer on the Google Calendar application team, and you’re tasked with implementing some productivity-enhancing features.\nTask: Your goal is to create a functionality for scheduling meetings. You need to determine and block the minimum number of meeting rooms for these meetings.\nTo do this, we are given some meeting times. We need to find a way to identify the number of meeting rooms needed to schedule them all. Each meeting will contain positive integers for a startTime and an endTime.\nOur meeting times can be listed as follows: {{2, 8}, {3, 4}, {3, 9}, {5, 11}, {8, 20}, {11, 15}}. We could schedule each meeting in a separate room, but we want to use the minimum amount of rooms. We observe that three meetings overlap: {2, 8}, {3, 4}, and {3, 9}. Therefore, at least these three will require separate rooms.\nMeeting times overlapping\nTo solve this, we use either a heap or priority queue for storing meeting times, using the end_time of each meeting as a key. The room at the top of our heap would become free earliest. If the meeting room from the top of the heap is not free, then no other room is free yet.\nSo, how do we build this functionality? Let’s break it down.\nSort the meetings by startTime.\nAllocate the first meeting to a room. Add the endTime as an entry in the heap.\nTraverse the other meetings and check if the meeting at the top has ended.\nIf the room is free, extract this element and add it to the heap again with the end time of the current meeting we want to process. If it is not free, allocate a new room and add it to our heap.\nAfter processing the list of meetings, the size of the heap will tell us how many rooms are allocated. This should be the minimum number of rooms we need.\nJava solution\n\nIf you want to see the solution in Python, check out the original post.\nComplexity measures\nTime complexity: O(n∗log(n))\nSpace complexity: O(n), where n is the number of meetings.\n4. Amazon Feature: Products in Price Range (BST)\nAmazon is the largest online store around the world, and they are always on the lookout for better ways to recommend products to their customers. Imagine you are a developer for Amazon’s store.\nTask: Implement a search filter to find products in a given price range. The product data is in the form of a binary search tree. The values are the prices of products.\nThe parameters we are working with are low and high, which represent a user’s price range. The example list of products below are mapped to their prices.\nExample list of products and prices\nThey are then stored in a binary search tree:\nBinary search tree\nWe can assume that the selected price range is low = 7 and high = 20, so our function solution should only return the prices {9, 8, 14, 20, 17}. So, how do we implement this? Let’s break it down.\n\n",
        username: 'Google kaa baap',
        dur: '7'
    }
]

function htmlToText(html) {
    var temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent; // Or return temp.innerText if you need to return only visible text. It's slower.
}


app.get('/', (req, res) => {
    res.render('homepage');
})

app.get('/menu/login', (req, res) => {
    res.render('login');
})

app.get('/blogs', (req, res) => {
    res.render('discoverBlogs', { blogs });
})

app.get('/blogs/new', (req, res) => {
    res.render('newBlog');
})

app.post('/blogs', (req, res) => {
    const { username, blogtext: blog, duration: dur, title } = req.body;
    blogs.push({ username, blog, dur, title, id: uuid() });
    res.redirect('/blogs');
})

app.get('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find(blog => blog.id === id);
    res.render('show', { blog });
})

app.get('/blogs/:id/edit', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find(blog => blog.id === id);
    res.render('edit', { blog });
})
app.get('/profile',(req,res)=>{
    res.render('profile');
})
app.get('/post',(req,res)=>{
    res.render('post',{ blogs });
})

app.patch('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const blogy = blogs.find(blog => blog.id === id);
    const newblog = req.body.blog;
    const newtitle = req.body.title;
    const newdur = req.body.duration;
    blogy.blog = newblog;
    blogy.title = newtitle;
    blogy.dur = newdur;
    res.redirect('/blogs');
})

app.delete('/blogs/:id', (req, res) => {
    const { id } = req.params;
    blogs = blogs.filter(blog => blog.id !== id);
    res.redirect('/blogs');
})


app.listen(8080, () => {
    console.log("Listening on port- 8080");
})