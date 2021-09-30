<br />
<p align="center">

  <h1 align="center">Adludio Data Science Challenge</h1>

  <p align="center">
    Series of tasks to demonstrate data science knowledge, skill and attitude. 
    </p> 
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#task-1">Task 1</a>
      <ul>
        <li><a href="#task-1-instructions">Instructions</a></li>
      </ul>
    </li>
    <li>
      <a href="#task-2">Task 2</a>
      <ul>
        <li><a href="#task-2-instructions">Instructions</a></li>
      </ul>
    </li>
    <li>
      <a href="#task-3">Task 3</a>
      <ul>
        <li><a href="#task-3-instructions">Instructions</a></li>
      </ul>
    </li>
  </ol>
</details>

# Task 1

 Come up with an algorithm that assigns a score to each site in each campaign and rank them accordingly. The scoring should be done in such a way that a higher score promises having high engagement rates for ads rendered on that site in the future.

## Task 1 Instructions
The notebook for this task is in the ScoringFinal.ipynb file located in the notebooks sub directory. To run the notebook make sure you have initially run  
```python
  pip install requirements.txt
```
to install the dependencies.The notebook contains the approach as well as description of approaches considered for task.
# Task 2
Build a dashboard that allows the user to select a specific campaign from a list of available ones and view the top ranked sites

## Task 2 Instructions
1. Clone the repo
   ```sh
   git clone 
   ```
2. Navigate to the web folder
    ```sh
    cd .\AdludioChallenge\web\
    ```

### With Docker
3. Docker compose
    ```sh
    docker compose up
    ```

### Without Docker
3. First navigate to flask_api
    ```sh
    cd .\flask_api
    ```
4. Install flask api dependencies
    ```sh
    pip install requirements.txt
    ```
5. Run Flask app
    ```sh
    python app.py
    ```

6. In a new terminal navigate to react_frontend. Assuming you are in the web directory
    ```sh
    cd .\react_frontend
    ```
4. Install react project dependencies
    ```sh
    yarn install
    ```
5. Run react app
    ```sh
    yarn start
    ```


# Task 3

We now want to know the level of decisiveness of the four categorical variables ( AdFormat, FoldPosition, OS, DeviceType) on whether a user will engage with an ad or not.

## Task 3 Instructions
The notebook for this task is in the Decisiveness.ipynb file located in the notebooks sub directory. To run the notebook make sure you have initially run  
```python
  pip install requirements.txt
```
to install the dependencies.The notebook contains the final approach as well as description of approaches considered for task.




 
