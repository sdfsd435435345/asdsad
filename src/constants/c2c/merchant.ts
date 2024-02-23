export enum ApplicationStatusEnum {
  success = 'enable',
  pendingApply = 'applying',
  pendingDelete = 'terminating',
  fail = 'fail',
  none = 'none',
  blacklisted = 'apply_blacklist',
  disable = 'disable',
}
