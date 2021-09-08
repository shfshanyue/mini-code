function dispatchAction (fiber, queue, action) {
  const eventTime = a
}

function scheduleUpdateOnFiber (fiber, lane, eventTime) {
  
}

function beginWork () {

}

function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}


function performSyncWorkOnRoot() {
  const lanes = getNextLanes(root, NoLanes)
}

function begineWork(current, workInProgress) {
  if (current !== null) {
    // 当 current 不为 null 时，说明该节点已经挂载，最大可能地复用旧节点数据
    return bailoutOnAlreadyFinishedWork(
      current,
      workInProgress,
      renderLanes,
    );
  } else {
    didReceiveUpdate = false;
  }

  switch (workInProgress.tag) {
  }
}

function reconcileChildren(
  current: Fiber | null,
  workInProgress: Fiber,
  nextChildren: any,
  renderLanes: Lanes
) {
  if (current === null) {
    // 对于mount的组件
    workInProgress.child = mountChildFibers(
      workInProgress,
      null,
      nextChildren,
      renderLanes,
    );
  } else {
    // 对于update的组件
    workInProgress.child = reconcileChildFibers(
      workInProgress,
      current.child,
      nextChildren,
      renderLanes,
    );
  }
}
