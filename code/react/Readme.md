## React.createElement 时做了什么？

+ React.createElement
  + ReactElement

## 数据结构

### workTag

> 源码位置: [react-reconciler/src/ReactWorkTag.js](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactWorkTags.js)

表示一个 `ReactElement` 的类型，以数字表示，以下列出最常见的几种类型。

``` js
// 函数式组件
export const FunctionComponent = 0;
// 类组件
export const ClassComponent = 1;

// 根元素
export const HostRoot = 3;

// HTML元素
export const HostComponent = 5;
```

### updateQueue

### FiberNode

> 源码位置: [react-reconciler/src/ReactInternalTypes.js](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js#L62)

``` js
export type Fiber = {|
  // 表示一个 `ReactElement` 的类型，以数字表示，以下列出最常见的几种类型。
  tag: WorkTag,

  // 如 div、button 等，也可以是 React 组件的名称，如 App()、HomePage() 等
  type: any,

  // The local state associated with this fiber.
  stateNode: any,

  // 指向父节点
  return: Fiber | null,
  // 指向首个子节点
  child: Fiber | null,
  // 指向相邻兄弟节点
  sibling: Fiber | null,

  // 维护虚拟节点的 props 
  // eg. <div key="10086" class="app">shanyue</div> 将返回:
  // { key: 10086, class: app, children: [shanyue] }
  memoizedProps: any,

  // 维护虚拟节点(组件)的 state
  memoizedState: any,

  // 即将需要更新的状态队列
  updateQueue: mixed,

  // The state used to create the output
  memoizedState: any,

  // Dependencies (contexts, events) for this fiber, if it has any
  dependencies: Dependencies | null,

  // 副作用
  flags: Flags,
  subtreeFlags: Flags,
  deletions: Array<Fiber> | null,

  // 关于存在副作用的 Fiber 链表，可以快速遍历完所有带有副作用的 FiberNode
  nextEffect: Fiber | null,

  // The first and last fiber with side-effect within this subtree. This allows
  // us to reuse a slice of the linked list when we reuse the work done within
  // this fiber.
  firstEffect: Fiber | null,
  lastEffect: Fiber | null,

  lanes: Lanes,
  childLanes: Lanes,

  // 每一个 FiberNode 都有一个成对的 alternate 
  alternate: Fiber | null,

|};
```

## Lane

> 源码位置: [react-reconciler/src/ReactFiberLane.js](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js#L62)

``` js
// 0
export const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;

// 1
export const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000001;
```

## Flag

> 源码位置: [react-reconciler/src/ReactFiberFlags.js](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js#L62)

``` js
// 0
export const NoFlags = /*                      */ 0b00000000000000000000000;

export const PerformedWork = /*                */ 0b00000000000000000000001;
export const Placement = /*                    */ 0b00000000000000000000010;

// 4
export const Update = /*                       */ 0b00000000000000000000100;
```

## EffectList

## render 时做了什么？

## setState 时做了什么？

``` jsx
const [count, setCount] = useState(0)

const handleClick = () => {
  setCount(count + 1)
}
```

+ setCount(1)
  + dispatchAction(fiber, queue, action) -> FiberNode
    + requestEventTime()
    + requestUpdateLane(fiber)  -> Lane
    + lastRenderedReducer(currentState, action)
    + scheduleUpdateOnFiber(fiber, lane, eventTime)
      + markUpdateLaneFromFiberToRoot(fiber, lane, eventTime) -> FiberRootNode
      + markRootUpdated(root, updateLane, eventTime)
      + ensureRootIsScheduled(root, eventTime)
      + schedulePendingInteractions(root, lane)
        + scheduleInteractions(root, lane, interactions)

``` js
function requestUpdateLane(fiber) {
  // Special cases
  var mode = fiber.mode;

  if ((mode & BlockingMode) === NoMode) {
    return SyncLane;
  }
}
```

## lastEffect

## performUnitOfWork

``` js
function performUnitOfWork(unitOfWork) {
  // The current, flushed, state of this fiber is the alternate. Ideally
  // nothing should rely on this, but relying on it here means that we don't
  // need an additional field on the work in progress.
  var current = unitOfWork.alternate;
  setCurrentFiber(unitOfWork);
  var next;

  if ( (unitOfWork.mode & ProfileMode) !== NoMode) {
    startProfilerTimer(unitOfWork);
    next = beginWork$1(current, unitOfWork, subtreeRenderLanes);
    stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
  } else {
    next = beginWork$1(current, unitOfWork, subtreeRenderLanes);
  }

  resetCurrentFiber();
  unitOfWork.memoizedProps = unitOfWork.pendingProps;

  if (next === null) {
    // If this doesn't spawn new work, complete the current work.
    completeUnitOfWork(unitOfWork);
  } else {
    workInProgress = next;
  }

  ReactCurrentOwner$2.current = null;
}
```

## beginWork

+ valueStack
+ fiberStack

+ contextFiberStackCursor

+ beginWork(current, workInProgress, renderLanes)
  + checkScheduledUpdateOrContext(current, renderLanes) -> boolean
    + bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) -> FiberNode
  + updateHostComponent -> FiberNode
    + pushHostContext(fiber)
      + push(cursor, value, fiber)
    + markRef(current, workInProgress)
    + reconcileChildren(current, workInProgress, nextChildren, renderLanes);

## debug 如何调试按源文件而非打包后的 react.development.js

+ mountWorkInProgressHook
+ updateWorkInProgressHook
