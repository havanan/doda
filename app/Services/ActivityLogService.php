<?php

namespace App\Services;

use App\Http\Models\Users;
use App\Repositories\ActivityLogRepository;

class ActivityLogService
{
    /** @var ActivityLogRepository $activityLogRepository */
    protected $activityLogRepository;

    public function __construct(ActivityLogRepository $activityLogRepository)
    {
        $this->activityLogRepository = $activityLogRepository;
    }

    /**
     * @param array $input
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function createActivityLog($input)
    {
        return $this->activityLogRepository->create($input);
    }
}
