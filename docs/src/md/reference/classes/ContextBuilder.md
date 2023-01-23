[@mstream/di](src/md/reference/README.md) / ContextBuilder

# Class: ContextBuilder

## Table of contents

### Constructors

- [constructor](src/md/reference/classes/ContextBuilder.md#constructor)

### Methods

- [build](src/md/reference/classes/ContextBuilder.md#build)
- [register](src/md/reference/classes/ContextBuilder.md#register)

## Constructors

### constructor

• **new ContextBuilder**()

## Methods

### build

▸ **build**(`options?`): `object`

#### Parameters

| Name              | Type      |
| :---------------- | :-------- |
| `options`         | `Object`  |
| `options.eagerly` | `boolean` |

#### Returns

`object`

---

### register

▸ **register**(`name`, `creator`): [`ContextBuilder`](src/md/reference/classes/ContextBuilder.md)

#### Parameters

| Name      | Type                           |
| :-------- | :----------------------------- |
| `name`    | `string`                       |
| `creator` | (`context`: `object`) => `any` |

#### Returns

[`ContextBuilder`](src/md/reference/classes/ContextBuilder.md)
