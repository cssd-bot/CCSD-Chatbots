# Collection of Questions relating to our Chat-Bot project

## Questions about Dialogflow Agents: 
Can look for some answers in https://stackoverflow.com/questions/tagged/dialogflow

1.	Can an agent pass on a question to another agent?  (single source answers to specific agents)?
2.	How much should a single agent be able to answer? 
3.	Is complexity the driving factor or are there others?
4.	What criteria should be used to group intents under an agent?
5.	What causes agents to get confused on which intent to use?
6.	For a given EntityType can I update the list of Entity entries from a external source? Ie: Schools => Notre Dame, St. Rita, Bishop Carroll…
    1. Dialogflow also provides tools for managing entities, including mechanisms for exporting and uploading entity data and modifying entities via API.
    2. https://cloud.google.com/dialogflow-enterprise/docs/reference/system-entities
7. Is there a limit to the number of entities contained in an entity type?
8. Is it reasonable to pull from a fulfillment system’s object model to come up with the EntityTypes? How would the properties (attributes) tie in?
   1. Developer composite: https://dialogflow.com/docs/entities/developer-entities
   2. Should DialogFlow entities be the entity business key to the eternal data?
9. How large or fully should you design your Entity model/hierarchy? Ie School, (Staff, Class, Location…), Staff.Job, Staff.email..., Class.Program, Class.Size…
before things get beyond the Agent’s ability to pull answers?
10. WIth intent training phrases and interplay with system entities & our custom ones, how best would we setup @Sys.FirstName and @Sys.LastName and our @CSSDStaff when asking if a person work from CSSD? Want to avoid confusion between entity types. Do we only use @CSSDStaff and if null we answer right away? Same with @School one could ask “Is Lord Beaverbrook one our our schools?”
11. When defining staff names for the CSSDStaff entity, should the base be FirstName LastName and the synonyms include full and preferred names? Using this will create duplicates based off common first and last names. We could put all the dups as synonyms  with preferred and middle names, but then would lose the distinctness a user provided. Is the matched synonym available when a phrase hits on one of the entity’s synonyms? (yes I found it in the Context)
12. What techniques can one use to simplify the translation of actions with multiple entities into a SQL query? Simplify the combinatorics that explode out. 
13. What’s the right way to pull verbs or “Asks” from an Intent into an Entity for that purpose? We kind of need this in the action to determine our response. 
14. How do I hookup my Agent to a host like Slack or Facebook or whatever? 
    1. Are some better than others?
    2. What would be best for our POC with Superintendent types?
    3. GoogleAssistant is integrated with dialogflow. Should we start with that? https://assistant.google.com/platforms/phones/
15. Can we come to a solution for these questions by adding another layer of abstraction, or by getting a more elevated view of our problem space?
16. If we consider the 5 W's our bot should be able to manage Who, What, Where, and eventually When. Should we align our intents with this? Do these ultimately work as result types like Show, Count...?  
17. Is it helpful to bring in a limited subset of verbs (not related to the desired result types) as an entity? ie: Actions we do in a school context, ie: Work, Serve, Know, Have, Offer...


## General project and bot Questions
What we don’t know - Start of Questions:
1. What are all the parts to an end to end Chat-bot?
   1. From BotSociety
      1. Natural language processing
      2. Dialog manager
      3. Content
      4. Custom integrations / external data
   2.	DialogFlow has these defined from their platform
      1. Agent -> Intents -> Parameters and Actions -> Additional Response -> Fulfilments - Final Response
2. Is it possible to develop an end to end solution without licensing cost?
   1. DialogFlow had mostly free options - until high volumes
   2. We have Google Contacts assigned to CCSD - Matt Torres <matttorres@google.com>
3. If not, what are those parts, and what’s the best bang for the buck?
   1. I’ve sent a pricing request out to https://www.botfuel.io/en/pricing
   2. https://zapier.com/app/billing/plans
4. If we need to connect to our databases for the answers, which framework tool is best?
   1. How well can Snatchbot.me do this?
   2. How well can Botfuel.io do this?
   3. Using DIalogFlow Fulfilments we can develop RestfulAPI apps that get data from our DBs
5. Does Botfuel’s Faceted Search work for our Proof of Concept (POC) bot for  superintendents?
6. We have Slack licenses for IT staff, does it make sense to try out Slack Bot?
   1. Should we hone in on an initial host ie: Google Assistant?
7. Which of the 2 types of bots should we go with, basic Chatbot - Follow defined Rules, or an AI Powered chat machine? Seems DialogFlow does give power of voice, but dev teams aren’t coding AI
8. Of these 2 what are the pros and cons for our POC?
   1. To start delivering on the Superintendent Bot DialogFlow meets the doable criteria for now. 
9. Where should we store the info from our research, our resources, decisions, and plans?
   1. https://en.wikipedia.org/wiki/Comparison_of_wiki_software
   2. DokuWiki?
   3. Jupyter
10. What is dialog flow? We know much more now. See Powerpoint
    1. Before developing, you should design your conversation 
    2. https://designguidelines.withgoogle.com/conversation/
    3. g.co/dev/ActionsDesign or https://developers.google.com/actions/design/
11. What means can we encode our development efforts to be transportable across different platforms?
    1. User profile - https://firebase.google.com/docs/firestore/
    2. Conversations, Journeys
    3. Entities, Intents, Actions.
12. What are all the use-cases can we support?
    1. What cases would best serve our stakeholders? 
    2. What do stakeholders want answers to? 
    3. What types of questions arise from specific events like Parent/Teacher conference that your wouldn’t have answers for? Would enumerating all the different events help?
    4. Get Stakeholder ranking priority, hone in on key use-cases.

## Posted questions on forums
1. https://stackoverflow.com/questions/55985556/dialogflow-intent-is-no-longer-matching-on-an-existing-entity-parameter
