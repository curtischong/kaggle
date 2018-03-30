#so basically every row in a df is an instance of an object
#so this is basically a 1D array then
#with each array index corresponding to a different condition

class Node(object):
    def __init__(self, left, right):
        self.left = left
        self.right = right
    def getLeft(self):
        return self.left
    def getRight(self):
        return self.right

#note: the first value of the array will be true or False
class Tree(object):
    global root
    root = Node(0,1)

    def getNode(self):
        return root.getRight()

    def loopThroughSubsets(self, arr2d):#part of building the tree
        
        for arr in range(arr2d):
            #now I have to sort each value in the array by this feature
            low = min(arr)
            hi = max(arr)

tree1 = Tree()
print(tree1.getNode())
