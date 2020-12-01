<?php

namespace App\Services;

use App\Repositories\UserRepository;
use App\Repositories\UserTokenRepository;
use App\Repositories\AppIdRepository;

class AuthService
{
    /** @var UserRepository $userRepository */
    protected $userRepository;

    /** @var UserTokenRepository $userTokenRepository */
    protected $userTokenRepository;

    /** @var AppIdRepository $appIdRepository */
    protected $appIdRepository;

    public function __construct(
        UserRepository $userRepository,
        UserTokenRepository $userTokenRepository,
        AppIdRepository $appIdRepository
    ) {
        $this->userTokenRepository = $userTokenRepository;
        $this->userRepository      = $userRepository;
        $this->appIdRepository     = $appIdRepository;
    }

    /**
     * @param $token
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function verifyToken($token)
    {
        $userToken = $this->userTokenRepository->findByToken($token);

        if (!$userToken) {
            return null;
        }

        return $this->userRepository->find($userToken->user_id);
    }

    /**
     * @param $attributes
     * @param $values
     */
    public function updateToken($attributes, $values)
    {
        return $this->userTokenRepository->updateOrCreate($attributes, $values);
    }

    /**
     * @param $attributes
     * @param $values
     */
    public function saveAppId($attributes, $values)
    {
        $this->appIdRepository->updateOrCreate($attributes, $values);
    }

    /**
     * @param $input
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function createToken($input)
    {
        return $this->userTokenRepository->create($input);
    }

    /**
     * @param $userId
     * @param $appId
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getTokenByUserIdAndAppId($userId, $appId)
    {
        return $this->userTokenRepository->getTokenByUserIdAndAppId($userId, $appId);
    }
}
