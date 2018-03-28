One difference from the prior example is that each derived class that contains a constructor function must call super() which will execute the constructor of the base class. What’s more, before we ever access a property on this in a constructor body, we have to call super(). This is an important rule that TypeScript will enforce.

However, it's almost impossible to use inheritance without super()