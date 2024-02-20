---
title: AEIOU packages
date: 2024-01-01
cover: https://images.unsplash.com/photo-1584573062914-a1f7848470a2?&q=85&fm=jpg&crop=entropy&cs=srgb&w=1440
emoji: 🌸
description: A simple, general structure for Python packages to promote better software design
level: draft
---

<figure>
  <img src="assets/content/aeiou_structure.png" alt="AEIOU Package Structure"/>
  <!-- <figcaption>A python package using the AEIOU structure contains five modules: abstract, errors, imports, operations, and unit tests to improve abstraction, extensibility, and clarity.</figcaption> -->
</figure>

In the ever-evolving world of software development, the structuring of Python packages plays a pivotal role in the maintainability and accessibility of applications. In this article, I introduce the AEIOU structure, a methodology designed to enhance the organization of Python packages. This structure is not only versatile, applicable to packages of various scales and complexities, but also encourages best practices in software development.

The idea is for a package to contain five specific modules, one for each letter in AEIOU, as well as whatever other modules are necessary to implement the promised features. The five modules are as follows: abstract, errors, imports, operations, and unit tests.

### Abstract Module

The 'A' in AEIOU stands for 'Abstract'. The `abstract.py` module contains the abstract base classes for all relevant classes in the package. This setup is similar to C header files and provides a convenient way for users to view abstract interfaces and methods without delving into specific implementations. Additionally, I find it helps with the high-level design of the functionality to explicitly define the abstract interfaces involved in the package all together in one place.

### Errors Module

'E' represents 'Errors'. `errors.py` should contain all custom exceptions that may be raised by the package. It's a good practice to define custom errors (subclasses of Python's exceptions) for any issues that are specific to the functionality of the package to enable the user to handle these errors specifically. This not only aids in debugging but also enhances the overall user experience by making error handling more intuitive. Even for simple packages, simple wrappers of Python's built-in exceptions should be used to provide more context. 

### Imports Module

'I' stands for 'Imports'. The `imports.py` file, though optional, can significantly improve the readability of your package. This module should consist of import statements from other packages or dependencies that are integral to your package. When a significant portion of your package relies on external functionalities, including them in `imports.py` makes the dependencies more manageable and accessible. Furthermore, if there is a specific non-trivial way in which the dependencies must be used, it is useful to implement that in a module separate from the rest of the package.

### Operations Module

'O' is for 'Operations', encapsulated in `ops.py`. This module should contain the top-level deliverables of your package, where features and functionalities from other modules are synthesized. A good rule of thumb is that if the package's `__init__.py` file is just `from .ops import *` the user should be able to get more or less all the core functionality they need, eventhough the individual features are implemented in other modules. Think of the separate specific other modules as building blocks that can be combined into a curated selection of top-level functions and classes ready for immediate use in `ops.py`.

### Unit Tests Module

Lastly, 'U' stands for 'Unit Tests', represented by `unit_tests.py`. This module contains all the unit tests for the functionality offered by your package, with special focus on the components in `ops.py`. Effective testing of software is a major topic of good software development, a bit more involved than what I can cover in this article, however for further reading look into `pytest`, code coverage testing, and continuous integration to improve the testing of your package.

### Conclusion

Implementing the AEIOU structure in Python packages offers several benefits:

- improved **abstraction** by separating the high-level interface from the implementation
- enhanced **extensibility** by allowing users to either use the package as recommended in `ops.py` or create their own custom subset of features provided by the package for their applications
- improved **clarity** by differentiating the abstract interface from the implementation, as well as separating out custom exceptions, and shared dependencies explicitly

It's important to note that this structure does add some overhead in development, such as writing out the abstract interface separately from the actual implementation and designing features to be modular to be put together later. However, these practices are beneficial for good software design. A potential downside is the need for multiple inheritance, particularly for implementing features as mixins, which can complicate code reasoning. However, this can be mitigated with thorough documentation and cross-referencing.

In sum, the AEIOU structure is more than just an organizational tool; it's a philosophy that encourages thoughtful, scalable, and user-friendly Python package development. By adopting this structure, developers can create packages that are not only efficient and reliable but also intuitive and accessible to a broad range of users, from beginners to seasoned professionals.


