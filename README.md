# Travelling Salesman Problem Using Genetic Algorithm
This project implements a solution to the Traveling Salesman Problem (TSP) using a Genetic Algorithm. The TSP is a classic optimization problem where the goal is to find the shortest possible route that visits a given set of cities and returns to the starting city.

## Project Structure

The repository is structured as follows,inside the `Travelling Sales person problem` Directory:-
1. `index.html`: This is the main HTML file that contains the visualization of the TSP solution. It uses web technologies like HTML, CSS, and JavaScript to render the solution graphically.
2. `ga.js`: This file contains the implementation of the genetic algorithm for solving the TSP. It defines the genetic operators such as selection, crossover, and mutation.
3. `sketch.js`: This file defines the set of cities and their coordinates. You can modify this file to change the problem instance.

## Running the Project

To run the project and observe the Traveling Salesman Problem (TSP) solution using a Genetic Algorithm, follow these steps:

1. Open the `index.html` file in a web browser of your choice.

2. The web page , TSP Visualizer will display a navbar with options: "Brute Force," "Genetic Algorithm," and "Know More."

3. Click on the "Genetic Algorithm" option.

4. The page will prompt you to enter the number of cities for the problem instance. Enter a positive integer value and click the "Submit" button.

5. The algorithm will generate a solution using the Genetic Algorithm and display the best route found on the visualization.

6. You can observe the progression of the algorithm and the improvement in the solution as the number of iterations increases.

7. You can also switch to the "Brute Force" option from the navigation bar to compare the Genetic Algorithm's solution with the brute force approach (which exhaustively checks all possible routes).

8. The "Know More" option is for the brief overview on the project.


## How the Algorithm Works

The genetic algorithm works as follows:

1. Initialization: A population of random routes (individuals) is generated.

2. Evaluation: Each route's fitness is calculated based on its total distance traveled.

3. Selection: A subset of routes is selected from the population for the next generation based on their fitness. Routes with better fitness have a higher chance of being selected.

4. Crossover: Pairs of selected routes are combined to create offspring routes by exchanging segments of their paths.

5. Mutation: Random changes are introduced to some offspring routes to maintain diversity and explore new solutions.

6. Replacement: The offspring routes replace some individuals in the current population.

7. Repeat Steps 2-6 for a certain number of iterations or until a termination condition is met (e.g., a specific fitness threshold).

8. The algorithm converges towards a better solution over iterations, and the best route found represents the optimized solution to the TSP.

## Conclusion and Scope

In conclusion, this project demonstrates the use of a Genetic Algorithm to solve the Traveling Salesman Problem (TSP). By applying evolutionary concepts such as selection, crossover, and mutation, the algorithm efficiently searches for an optimized solution that minimizes the total distance traveled.

The Genetic Algorithm approach offers a significant advantage over the brute force method, especially for large problem instances, as it explores a smaller subset of possible solutions while still converging towards a near-optimal solution.

The scope of this project can be extended in several ways:

- **Performance Optimization**: Implement techniques such as parallel computing, advanced genetic operators, or hybrid algorithms to further improve the efficiency and speed of finding high-quality solutions.

- **Additional Constraints**: Modify the algorithm to incorporate additional constraints, such as time windows for cities or multiple salespersons, making it more applicable to real-world scenarios.

- **Visual Enhancements**: Enhance the visualization by adding interactive features like dragging cities, displaying route statistics, or integrating map-based representations.

- **Algorithmic Variations**: Explore and compare different variations of the Genetic Algorithm, such as different selection strategies (tournament selection, rank-based selection) or exploring alternative evolutionary algorithms (ant colony optimization, simulated annealing).

**Thank you for visiting this repository, feel free to issue a pull request!!**



