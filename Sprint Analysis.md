# [Design Sprint](https://www.thesprintbook.com/)
## Starting at the End

**This is what I've determined to be the highest priority problem**:

  * Get students up and running with Chat-Bot development without bogging down to reinventing the fulfillment request that processes the action/parameters.
  or
  * How do we translate our Dialogflow Action/Parameters into the right queries needed to answer the provided question correctly?

**Long term goal**: Have a generic School based framework for taking Dialogflow actions/parameters and translating them into SQL. Have this design work for different School based Agents and with an extensible set of School Entities.

**Why**? This should allow students creating bots to connect their Agents to the data containing their answers without them having to fully understand this process. Get them from their initial concept for their Agent to one that can provide answers contained in a SQL database.

**Where do we want to be by end of school year**? Have a framework that could manage requests with any combination of two school entities.

**How could this fail** (turn fears into questions)?
1. Not enough of what we learn is able to transfer to other agents the students want to create for their school
2. Insufficient problem solving to abstract out the complexity for a simplified solution
3. Our Chatbot fails to get the intended answer in a high enough percentage of asks 

## Sprint Map - map the problem.  **Translation Map**
Our map shows the 2 states with the translation problem going from one to the other. 
* 1 for an SQL statement syntax
* 1 for an action & parameter set

Things in the action set are allowed to adapt before the SQL, as we have flexibility here.
Still need to introduce ways to transform the action into SQL.
Also need to break these into smaller pieces.

## How Might We (HMW) ##
Here are some statements about our targeted problem that could be turned into HMW statements:
* Seems intents could work with the limited set of verbs. Just the ones that our agents can respond to.
  * Staff Entity ==> Work, Is at, Employed...
  * School Entity ==> Is in, How many...
* Our School Entities as well as the SQL query language have their constraints relative to the questions that could be answered. These need to be identified and integreated into our solution. 
* Could the verbs be further limted when defined with another school entity?
  * Staff & School ==> Works at, Runs...
  * School & Municipal Division ==> In, part of...
  * Here it seems Order matters - Subject of the verb vs. predicate object
* **Exercise:** Come up with all the verbs that make sence with 1 school entity.
* **Exercise:** Come up with all the verbs that make sence between any 2 school entities.
  * Then does any given verb change how the SQL should be coded?
  * Should these be contained in the "Result Type" or "W's" entities?
* Should we assume when a sentence is a question the 1st school entity is the subject, and the 2nd school entity is the predicate's object? (or deal with Disjuntive Questions)
* **Note:** Predicate is a verb with an optional object. Can we imply the object? 
  * **Exercise:** Come up with all the verbs that make sence between 1 school entity and an implied object.
* **Note:** The set of "Wh's" most prevalent terms are: Who, What, Where, How, How Many... 
  * we should also be able to limit these with the ones our agent can answer. What are these? 
* **Exercise:** Make an excel spreadsheet with all our School entity combinations from above, and categroize them into: 
  * [Question types](https://preply.com/en/blog/2014/11/13/types-of-questions-in-english/)
    1. Yes/No type questions our agent could answer
    2. Wh's type questions our agent could answer
    3. Choice questions our agent could answer   
  * Identify the subject, predicate verb, predicate object
  * Look for any patterns  
* Review all of this info, now and pull out as many HMW statements as we can.
* Determine any of the simple or small steps that can move this problem forward. 
* Remember, if things get too complicated, it's time to rethink the solution.
  
    
