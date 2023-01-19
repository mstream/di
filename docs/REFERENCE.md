<a name="module_di"></a>

## di

- [di](#module_di)
  - _static_
    - [.contextBuilder()](#module_di.contextBuilder) ⇒ <code>ContextBuilder</code>
  - _inner_
    - [~BuildFn](#module_di..BuildFn) ⇒ <code>object</code>
    - [~RegisterFn](#module_di..RegisterFn) ⇒ <code>ContextBuilder</code>
    - [~ContextBuilder](#module_di..ContextBuilder) : <code>object</code>

<a name="module_di.contextBuilder"></a>

### di.contextBuilder() ⇒ <code>ContextBuilder</code>

Creates a builder which allow to register
dependency creators.

**Kind**: static method of [<code>di</code>](#module_di)  
<a name="module_di..BuildFn"></a>

### di~BuildFn ⇒ <code>object</code>

**Kind**: inner typedef of [<code>di</code>](#module_di)  
<a name="module_di..RegisterFn"></a>

### di~RegisterFn ⇒ <code>ContextBuilder</code>

**Kind**: inner typedef of [<code>di</code>](#module_di)

| Param   | Type                  |
| ------- | --------------------- |
| name    | <code>string</code>   |
| creator | <code>function</code> |

<a name="module_di..ContextBuilder"></a>

### di~ContextBuilder : <code>object</code>

**Kind**: inner typedef of [<code>di</code>](#module_di)  
**Properties**

| Name     | Type                    | Description                                             |
| -------- | ----------------------- | ------------------------------------------------------- |
| build    | <code>BuildFn</code>    | builds a context with registered dependencies inside it |
| register | <code>RegisterFn</code> | register a depenency                                    |
