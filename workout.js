class Graph{
    constructor(){
        this.list = {}
    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }
    }
    addEdges(vertex1, vertex2){
        if(!this.list[vertex1]){
            this.list[vertex1] = new Set()
        }
        if(!this.list[vertex2]){
            this.list[vertex2] = new Set()
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    display(){
        for(let vetex in this.list){
            console.log(vetex+'->'+[...this.list[vetex]]);
        }
    }
    deleteEdges(vertex1, vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
    if(!this.list[vertex]){
        return
    }
        for(let vert of this.list[vertex]){
            this.deleteEdges(vert, vertex)
        }
        delete this.list[vertex]
    }
    search(vertex1,vertex2){
        return this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addEdges("B",'C')
// graph.deleteEdges('B','C')
// graph.removeVertex('B')
graph.display()
console.log(graph.search('B','C'));
