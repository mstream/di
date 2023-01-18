<a name="module_index"></a>

## index

- [index](#module_index)
  - _static_
    - [.contextBuilder()](#module_index.contextBuilder) ⇒ <code>ContextBuilder</code>
  - _inner_
    - [~BuildFn](#module_index..BuildFn) ⇒ <code>object</code>
    - [~RegisterFn](#module_index..RegisterFn) ⇒ <code>ContextBuilder</code>
    - [~RegisterEagerFn](#module_index..RegisterEagerFn) ⇒ <code>ContextBuilder</code>
    - [~ContextBuilder](#module_index..ContextBuilder) : <code>object</code>

<a name="module_index.contextBuilder"></a>

### index.contextBuilder() ⇒ <code>ContextBuilder</code>

Creates a builder which allow to register
dependency creators.

**Kind**: static method of [<code>index</code>](#module_index)  
<a name="module_index..BuildFn"></a>

### index~BuildFn ⇒ <code>object</code>

**Kind**: inner typedef of [<code>index</code>](#module_index)  
<a name="module_index..RegisterFn"></a>

### index~RegisterFn ⇒ <code>ContextBuilder</code>

**Kind**: inner typedef of [<code>index</code>](#module_index)

| Param   | Type                  |
| ------- | --------------------- |
| name    | <code>string</code>   |
| creator | <code>function</code> |

<a name="module_index..RegisterEagerFn"></a>

### index~RegisterEagerFn ⇒ <code>ContextBuilder</code>

**Kind**: inner typedef of [<code>index</code>](#module_index)

| Param   | Type                  |
| ------- | --------------------- |
| name    | <code>string</code>   |
| creator | <code>function</code> |

<a name="module_index..ContextBuilder"></a>

### index~ContextBuilder : <code>object</code>

**Kind**: inner typedef of [<code>index</code>](#module_index)  
**Properties**

| Name          | Type                         | Description                                             |
| ------------- | ---------------------------- | ------------------------------------------------------- |
| build         | <code>BuildFn</code>         | builds a context with registered dependencies inside it |
| register      | <code>RegisterFn</code>      | register a depenency                                    |
| registerEager | <code>RegisterEagerFn</code> | registers an eager dependency                           |
